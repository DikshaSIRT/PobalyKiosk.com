import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function WalletRecharge() {
  const navigate = useNavigate();
  const [selectedPack, setSelectedPack] = useState(null);
  const [balance, setBalance] = useState(1250);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const packs = [
    { id: 1, coins: 100, price: 100 },
    { id: 2, coins: 250, price: 230 },
    { id: 3, coins: 500, price: 450 },
    { id: 4, coins: 1000, price: 850 },
  ];

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
    else navigate("/signin");

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, [navigate]);

  const processPayment = async (pack) => {
    if (!user) return alert("Sign in first!");
    setLoading(true);
    setErrorMessage("");

    try {
      console.log("Sending create-order request to backend:", pack);

      const { data: order } = await axios.post(
        "http://localhost:5000/create-order",
        { pack: { ...pack, user_id: user.id || "User" } }
      );

      console.log("Order created:", order);

      const options = {
        key: "rzp_test_R8ilSReCYz0rCw", // Razorpay TEST Key
        amount: order.amount,
        currency: order.currency,
        name: "PobolyKiosk",
        description: `${pack.coins} Rw Coins Recharge`,
        order_id: order.id,
        handler: async (response) => {
          try {
            console.log("Verifying payment on backend:", response);

            const verify = await axios.post(
              "http://localhost:5000/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }
            );

            if (verify.data.success) {
              const newBalance = balance + pack.coins;
              setBalance(newBalance);

              const transaction = {
                id: Date.now(),
                pack_id: pack.id,
                coins: pack.coins,
                amount: pack.price,
                payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                timestamp: new Date().toISOString(),
                status: "success",
              };

              const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
              transactions.push(transaction);
              localStorage.setItem("transactions", JSON.stringify(transactions));

              const updatedUser = { ...user, walletBalance: newBalance };
              localStorage.setItem("user", JSON.stringify(updatedUser));

              alert(`Payment Successful! 🎉\nYou purchased ${pack.coins} Rw Coins.`);
              setSelectedPack(null);
            } else {
              setErrorMessage("Payment verification failed!");
            }
          } catch (err) {
            console.error("Verify payment error:", err);
            setErrorMessage("Error verifying payment. Please try again!");
          }
          setLoading(false);
        },
        prefill: { name: user.fullname, email: user.email, contact: user.phone },
        theme: { color: "#ff2a2a" },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Create order / Payment error:", error);
      setErrorMessage(
        error.response?.data?.error || "Payment failed. Check backend console!"
      );
      setLoading(false);
    }
  };

  const handleRecharge = () => {
    if (!selectedPack) return alert("Select a pack first!");
    processPayment(selectedPack);
  };

  const getTransactionHistory = () =>
    JSON.parse(localStorage.getItem("transactions") || "[]").slice(-5);

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ color: "#ff2a2a", textAlign: "center" }}>💰 Wallet Recharge</h1>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Balance: {balance} Rw Coins</h2>
        <p>≈ ₹{(balance * 0.9).toFixed(2)}</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {packs.map((pack) => (
          <div
            key={pack.id}
            onClick={() => setSelectedPack(pack)}
            style={{
              padding: "20px",
              borderRadius: "10px",
              border:
                selectedPack?.id === pack.id ? "2px solid #ff2a2a" : "1px solid #ccc",
              cursor: "pointer",
              minWidth: "150px",
              textAlign: "center",
            }}
          >
            <h3>{pack.coins} Coins</h3>
            <p>₹{pack.price}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleRecharge}
        disabled={!selectedPack || loading}
        style={{
          padding: "15px 30px",
          backgroundColor: "#ff2a2a",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        {loading ? "Processing..." : "Recharge Now"}
      </button>

      {errorMessage && (
        <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
      )}

      <div style={{ marginTop: "30px" }}>
        <h2>Recent Transactions</h2>
        {getTransactionHistory().length > 0 ? (
          <ul>
            {getTransactionHistory().map((tx) => (
              <li key={tx.id}>
                {new Date(tx.timestamp).toLocaleString()} | +{tx.coins} Coins | ₹{tx.amount}
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions yet</p>
        )}
      </div>
    </div>
  );
}
