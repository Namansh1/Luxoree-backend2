import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// SAVE ORDER
router.post("/save", async (req, res) => {
  try {
    const { items, total, paymentId } = req.body;

    const order = new Order({
      items,
      total,
      paymentId,
    });

    await order.save();

    res.json({ success: true, order });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});

export default router;