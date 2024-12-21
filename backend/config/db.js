import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Db Connected Successfuly: ${conn.connection.host}`);
  } catch {
    (err) => console.log(err.message);
    process.exit(1);
  }
};
