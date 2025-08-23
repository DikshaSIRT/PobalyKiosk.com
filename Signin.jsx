import { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [fullname, setfullname] = useState('');
  const [phone, setphone] = useState('');
  const [otp, setotp] = useState('');
  const [verify, setverify] = useState(false);
  const [password, setPassword] = useState(() => {
    return localStorage.getItem("password") || "";
  });
  useEffect(() => {
    localStorage.setItem("password", password);
  }, [password]);
  const sendOtp = async () => {
    try {
      await axios.post("http://localhost:5000/send-otp", { phone });
      alert("OTP sent!");
    } catch (error) {
      console.error(error.message);
      alert("Failed to send OTP. Please try again.");
    }
  };

  const verifyOtp = async () => {
    try {
      // Make sure phone and otp are provided
      if (!phone) {
        alert("Please enter your phone number.");
        return;
      }
      if (!otp) {
        alert("Please enter the OTP.");
        return;
      }
  
      // Call backend to verify OTP
      const response = await axios.post("http://localhost:5000/verify-otp", { phone, otp });
  
      // Check backend response
      if (response.data.verified) {
        setverify(true);
        alert("OTP verified successfully!");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error(error.message);
      alert("Failed to verify OTP. Please try again.");
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyOtp();
    console.log("Password submitted:", password);
  };

  return (
    <div className="Signupbox">
      <form onSubmit={handleSubmit}>
        <h1>Sign IN</h1>
        {!verify ? (
          <div>
           
            <label>
              <strong>Phone:</strong>
              <input
                type="text"
                placeholder="Enter Phone number"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                className="Signin"
              />
            </label>
            <label >
          <strong>Password: </strong>
          <input
            type="password" id="password" placeholder="Enter Your Password" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

            <label>
              <strong>OTP:</strong>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setotp(e.target.value)}
                className="Signin"
              />
            </label>

            <button type="button" onClick={sendOtp} className="Buttencs">
              Get OTP
            </button>
            <button type="button" onClick={verifyOtp} className="Buttencs">Verify OTP</button>
          

            <h3>You Don't have account?</h3>
            <Link to="/signup" className="Signin">
              SIGN UP
            </Link>
          </div>
        ) : (
          <div>
            <h2>OTP Verified Successfully!</h2>
            <p>Welcome Back to PobolyKiosk!</p>
            <button 
              onClick={() => {
                // Save user data to localStorage
                const userData = { fullname, phone, joinDate: new Date().toISOString().split('T')[0] };
                localStorage.setItem('user', JSON.stringify(userData));
                navigate('./Frontend/Home');
              }}
              style={{
                padding: '12px 25px',
                backgroundColor: '#ff2a2a',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                marginTop: '20px'
              }}
            >
              🏠 Go to Home
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
