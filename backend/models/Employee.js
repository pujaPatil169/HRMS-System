const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ['regular', 'contract'] },
  email: String,
  salary: Number
});

module.exports = mongoose.model('Employee', employeeSchema);
