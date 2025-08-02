// models/Issue.js
const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  title: String,
  description: String,
  photos: [String],
  category: {
    type: String,
    enum: ['Roads', 'Lighting', 'Water Supply', 'Cleanliness', 'Public Safety', 'Obstructions']
  },
 location: {
  type: {
    type: String,
    enum: ['Point'],
    required: true,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
      validate: {
    validator: function (val) {
      return val.length === 2 && typeof val[0] === 'number' && typeof val[1] === 'number';
    },
    message: `Coordinates must be an array of two numbers [lng, lat]} `,
},

    required: true
  }
},

  reporterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isAnonymous: Boolean,
  status: { type: String, enum: ['Reported', 'In Progress', 'Resolved'], default: 'Reported' },
  flagCount: { type: Number, default: 0 },
  hidden: { type: Boolean, default: false }
}, { timestamps: true });

IssueSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Issue', IssueSchema);
