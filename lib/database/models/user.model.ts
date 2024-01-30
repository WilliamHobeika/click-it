import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
});

const User = models.User || model("User", UserSchema); // first time we call it, it will use the second function since there's no "User" model in the db. later one it will use the first function

export default User;
