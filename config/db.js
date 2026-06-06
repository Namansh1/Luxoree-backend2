import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Trying DB connect...");

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected ✅");
    console.log("Host:", conn.connection.host);
  } catch (error) {
    console.log("MongoDB Connection Failed ❌");
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
