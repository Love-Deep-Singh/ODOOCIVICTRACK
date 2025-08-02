// models/Flag.js
const mongoose = require('mongoose');

const FlagSchema = new mongoose.Schema({
  issueId: { type: mongoose.Schema.Types.ObjectId, ref: 'Issue' },
  flaggedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reason: String
}, { timestamps: true });

module.exports = mongoose.model('Flag', FlagSchema);
