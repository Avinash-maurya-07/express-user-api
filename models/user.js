const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  age: { type: Number },
  country: { type: String, default: "Unknown" }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports=User;