const express = require("express");
const cors = require("cors");
const twilio = require("twilio");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const multer = require("multer"); // optional for file upload

const app = express();
app.use(express.json());
app.use(cors());

// ----------------- Twilio OTP -----------------
const accountSid = "AC978b16ab010";
const authToken = "c325a83506b455e";
const client = twilio(accountSid, authToken);
const otpStore = {};

// Send OTP
app.post("/send-otp", (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).send({ success: false, message: "Phone number is required" });

  const otp = Math.floor(100000 + Math.random() * 900000);
  client.messages
    .create({
      body: `Your OTP is ${otp}`,
      from: "+18157832668",
      to: phone,
    })
    .then(() => {
      otpStore[phone] = otp;
      console.log(`OTP for ${phone}: ${otp}`);
      res.status(200).send({ verified: true, message: "OTP sent successfully" });
    })
    .catch((error) => {
      console.error("Twilio error:", error.message);
      res.status(500).send({ verified: false, message: "Failed to send OTP" });
    });
});

// Verify OTP
app.post("/verify-otp", (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) return res.status(400).send({ success: false, message: "Phone and OTP are required" });

  if (!otpStore[phone] || otpStore[phone].toString() !== otp.toString()) {
    return res.status(400).send({ verified: false, message: "Invalid OTP" });
  }

  delete otpStore[phone];
  res.status(200).send({ verified: true, message: "OTP verified successfully" });
});

// ----------------- Razorpay Integration -----------------
const razorpay = new Razorpay({
  key_id:"rzp_Yz0rCw",        
  key_secret:"9XIsTRvxVV",       
});

// Create Razorpay order
app.post("/create-order", async (req, res) => {
  try {
    const { pack } = req.body;
    if (!pack) return res.status(400).json({ error: "Pack is required" });

    const options = {
      amount: pack.price * 100,  // Razorpay amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error("Create order error:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// Verify Razorpay payment
app.post("/verify-payment", (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", razorpay.key_secret)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, error: "Invalid signature" });
    }
  } catch (err) {
    console.error("Verify payment error:", err);
    res.status(500).json({ success: false, error: "Payment verification failed" });
  }
});

// ----------------- RTI Functionality -----------------

const storage = multer.memoryStorage();
const upload = multer({ storage });

let tickets = [];
let dailySequence = {};

// Generate Ticket ID
function generateTicketID() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const dateKey = `${yyyy}${mm}${dd}`;

  let seq = dailySequence[dateKey] ? dailySequence[dateKey] + 1 : 1;
  dailySequence[dateKey] = seq;

  const seqPart = seq <= 26 ? String.fromCharCode(64 + seq) : seq;
  return `${dateKey}${seqPart}`;
}

// Submit RTI
app.post("/submit-rti", upload.single("document"), (req, res) => {
  const { name, mobile, email, address, state, pincode, subject, description } = req.body;

  if (!name || !mobile || !pincode || !subject || !description) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  const ticket_id = generateTicketID();
  const ticket = {
    ticket_id,
    name,
    mobile,
    email,
    address,
    state,
    pincode,
    subject,
    description,
    document: req.file ? req.file.originalname : null,
    status: "Pending",
    submitted_on: new Date().toISOString().split("T")[0],
  };

  tickets.push(ticket);
  res.json({ message: "RTI submitted successfully", ticket });
});

// Track RTI
app.post("/track-rti", (req, res) => {
  const { ticket_id, mobile } = req.body;

  if (!ticket_id || !mobile) {
    return res.status(400).json({ error: "Ticket ID and Mobile required" });
  }

  const ticket = tickets.find(
    (t) => t.ticket_id === ticket_id && t.mobile === mobile
  );

  if (!ticket) return res.status(404).json({ error: "Invalid Ticket ID or Mobile Number" });

  res.json({ ticket });
});

// ----------------- Start Server -----------------
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
