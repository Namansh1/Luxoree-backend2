import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.json([
      { _id: 1, name: "Marine", price: 499, desc: "Fresh ocean fragrance" },
      { _id: 2, name: "Oud Luxe", price: 499, desc: "Royal Arabic scent" },
      { _id: 3, name: "Black Musk", price: 499, desc: "Deep luxury scent" },
      { _id: 4, name: "Amber Gold", price: 499, desc: "Warm premium fragrance" },
      { _id: 5, name: "Royal Oud", price: 499, desc: "Elite perfume" },
      { _id: 6, name: "Velvet Rose", price: 499, desc: "Soft floral luxury" },
      { _id: 7, name: "Night Intense", price: 499, desc: "Evening bold scent" },
      { _id: 8, name: "Ice Fresh", price: 499, desc: "Cool refreshing vibe" },
    ]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
