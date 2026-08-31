const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  city: { type: String, required: true },
  severity: { type: String, enum: ['Normal', 'Moderate', 'Severe', 'Extreme'], default: 'Moderate' },
  symptoms: [{ type: String }],
  awsVerified: { type: Boolean, default: false },
  stressScore: { type: Number, default: 50 },
  timestamp: { type: Date, default: Date.now }
});

// Transform output to match frontend `id` expectation
reportSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Report', reportSchema);
