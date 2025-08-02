// models/StatusLog.js
const mongoose = require('mongoose');

const StatusLogSchema = new mongoose.Schema({
  issueId: { type: mongoose.Schema.Types.ObjectId, ref: 'Issue' },
  status: { type: String, enum: ['Reported', 'In Progress', 'Resolved'] },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('StatusLog', StatusLogSchema);
