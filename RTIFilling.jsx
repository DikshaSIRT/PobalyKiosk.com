import React, { useState } from "react";
import axios from "axios";

export default function RTIForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    state: "",
    pincode: "",
    subject: "",
    description: "",
    document: null,
  });
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState("");

  // Tab state: submit or track
  const [activeTab, setActiveTab] = useState("submit");
  const [trackTicketId, setTrackTicketId] = useState("");
  const [trackMobile, setTrackMobile] = useState("");
  const [trackedTicket, setTrackedTicket] = useState(null);
  const [trackError, setTrackError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleNext = () => {
    if (!formData.name || !formData.mobile || !formData.pincode) {
      alert("Please fill all required fields!");
      return;
    }
    setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/submit-rti", formData);
      setTicket(res.data.ticket);
      setStep(3); // Show confirmation
    } catch (err) {
      setError(err.response?.data?.error || "Submission failed");
    }
  };

  const handleTrack = async () => {
    setTrackError("");
    setTrackedTicket(null);

    if (!trackTicketId || !trackMobile) {
      setTrackError("Both Ticket ID and Mobile are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/track-rti", {
        ticket_id: trackTicketId,
        mobile: trackMobile,
      });
      setTrackedTicket(res.data.ticket);
    } catch (err) {
      setTrackError(err.response?.data?.error || "Error tracking ticket");
    }
  };

  return (
    <div className="rti-form" style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>RTO Filing Form</h1>

      {/* Tab Buttons */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <button
          onClick={() => setActiveTab("submit")}
          style={{
            flex: 1,
            padding: "10px",
            cursor: "pointer",
            backgroundColor: activeTab === "submit" ? "#ff2a2a" : "#eee",
            color: activeTab === "submit" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px 0 0 5px",
          }}
        >
          Submit RTO
        </button>
        <button
          onClick={() => setActiveTab("track")}
          style={{
            flex: 1,
            padding: "10px",
            cursor: "pointer",
            backgroundColor: activeTab === "track" ? "#ff2a2a" : "#eee",
            color: activeTab === "track" ? "#fff" : "#000",
            border: "none",
            borderRadius: "0 5px 5px 0",
          }}
        >
          Track RTO
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "submit" && (
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="form-step">
              <h2>Step 1: Customer Details</h2>
              <label>
                Full Name *
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>

              <label>
                Mobile Number *
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
              </label>

              <label>
                Email
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>

              <label>
                Address
                <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
              </label>

              <label>
                State
                <input type="text" name="state" value={formData.state} onChange={handleChange} />
              </label>

              <label>
                Pincode *
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
              </label>

              <div className="form-nav">
                <button type="button" onClick={handleNext}>Next</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h2>Step 2: Query + Upload Docs</h2>
              <label>
                RTO Subject *
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
              </label>

              <label>
                Query Description *
                <textarea name="description" value={formData.description} onChange={handleChange} required />
              </label>

              <label>
                Upload Supporting Document
                <input type="file" name="document" onChange={handleChange} />
              </label>

              <div className="form-nav">
                <button type="button" onClick={handleBack}>Back</button>
                <button type="submit"> Submit RTO</button>
              </div>
            </div>
          )}

          {step === 3 && ticket && (
            <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
              <h3>RTO Submitted Successfully!</h3>
              <p>Ticket ID: <b>{ticket.ticket_id}</b></p>
              <p>Status: {ticket.status}</p>
              <p>Keep your Ticket ID & Mobile to track status later.</p>
            </div>
          )}

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}

      {activeTab === "track" && (
        <div style={{ padding: "10px", border: "1px solid #ccc" }}>
          <h2>Track Your RTO Ticket</h2>
          <input
            type="text"
            placeholder="Ticket ID"
            value={trackTicketId}
            onChange={(e) => setTrackTicketId(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={trackMobile}
            onChange={(e) => setTrackMobile(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <button
            onClick={handleTrack}
            style={{ padding: "8px 20px", marginBottom: "10px", cursor: "pointer" }}
          >
            Track Ticket
          </button>

          {trackError && <p style={{ color: "red" }}>{trackError}</p>}

          {trackedTicket && (
            <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #aaa" }}>
              <p><b>Ticket ID:</b> {trackedTicket.ticket_id}</p>
              <p><b>Status:</b> {trackedTicket.status}</p>
              <p><b>Subject:</b> {trackedTicket.subject}</p>
              <p><b>Description:</b> {trackedTicket.description}</p>
              <p><b>Submitted on:</b> {trackedTicket.submitted_on}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
