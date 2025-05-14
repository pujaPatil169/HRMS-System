const mongoose = require('mongoose');

const contractorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  hourlyRate: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contractor', contractorSchema);
