const mongoose = require('mongoose');

const advisorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  region: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Advisory', advisorySchema);
