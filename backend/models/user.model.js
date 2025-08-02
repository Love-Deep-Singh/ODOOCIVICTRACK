const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
  isAnonymous: { type: Boolean, default: true },
  banned: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);