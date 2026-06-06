import express from "express";
import Razorpay from "razorpay";

const router = express.Router();

// ⚠️ IMPORTANT: Razorpay ko lazy init karo (NO CRASH)
router.post("/create-order", async (req, res) => {
  try {
    const amount = Number(req.body.amount);

    if (!amount) {
      return res.status(400).json({ error: "Amount missing" });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount,
      currency: "INR",
      receipt: "rcpt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    console.log("ORDER CREATED:", order);

    res.json(order);
  } catch (err) {
    console.log("PAYMENT ERROR:", err);

    res.status(500).json({
      error: err.message || "Payment failed",
    });
  }
});

export default router;