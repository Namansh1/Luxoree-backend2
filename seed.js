import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./routes/Product.js";

dotenv.config();

const products = [
  { name: "Luxoree Noir", price: 499, desc: "Deep luxury fragrance..." },
  { name: "Ocean Drift", price: 499, desc: "Fresh aquatic scent..." },
  { name: "Amber Glow", price: 499, desc: "Soft amber sweetness..." },
  { name: "Royal Oud", price: 499, desc: "Strong Arabian oud..." },
  { name: "Velvet Bloom", price: 499, desc: "Romantic floral scent..." },
  { name: "Midnight Pulse", price: 499, desc: "Bold night fragrance..." },
  { name: "Crystal Mist", price: 499, desc: "Light airy freshness..." },
  { name: "Golden Aura", price: 499, desc: "Premium oriental blend..." },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("🔥 Database Seeded Successfully");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedDB();