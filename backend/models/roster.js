const mongoose = require('mongoose');

const rosterSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  shiftDate: { type: Date, required: true },
  shiftType: { type: String, enum: ['morning', 'evening', 'night'], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Roster', rosterSchema);
