import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: String,
    phone: String,
    email: String,
    password: String,
    token: String,
    username: { type: String },
    role: { type: String, default: "user" },
    isActive: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
    accountType: { type: String, default: "Regular" },
    rank: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    contact: String,
    status: String,
    plan: String,
    bio: String,
    image: { type: String, default: "http://placehold.jp/150x150.png" },
  },
  { toJSON: { virtuals: true }, timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
// module.exports = User;
