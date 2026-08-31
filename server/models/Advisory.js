const mongoose = require('mongoose');

const advisorySchema = new mongoose.Schema({
  category: { type: String, enum: ['Citizen', 'Worker', 'Elderly', 'Health'], required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  actions: [{ type: String }],
  confidence: { type: Number, default: 95 }
});

advisorySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Advisory', advisorySchema);
