import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  date_created: { type: Date, required: true },
  password: { type: String, required: true }
}, { collection: 'users' });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;