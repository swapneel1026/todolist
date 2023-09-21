import mongoose from "mongoose";
import { User } from "../models/user";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("db connected");

    //testing and creating new user
    const user = new User({
      name: "test1",
      email: "test1",
      password: "test1",
      about: "test1",
    });
    await user.save();
    console.log("user is created");
  } catch (error) {
    console.log("failed to connect to db");
    console.log(error);
  }
};
