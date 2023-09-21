import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email Req!"],
  },
  password: {
    type: String,
    required: [true, "pass req!"],
  },
  about: String,
  profileUrl: String,
  address: {
    street: String,
    city: String,
    pincode: Number,
  },
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
