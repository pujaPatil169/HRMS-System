const Payroll = require('../models/payroll');

exports.getPayrolls = async (req, res) => {
  try {
    const payrolls = await Payroll.find();
    res.json(payrolls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPayrollById = async (req, res) => {
  try {
    const payroll = await Payroll.findById(req.params.id);
    if (!payroll) return res.status(404).json({ message: 'Payroll record not found' });
    res.json(payroll);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPayroll = async (req, res) => {
  try {
    const payroll = new Payroll(req.body);
    await payroll.save();
    res.status(201).json(payroll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updatePayroll = async (req, res) => {
  try {
    const payroll = await Payroll.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!payroll) return res.status(404).json({ message: 'Payroll record not found' });
    res.json(payroll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePayroll = async (req, res) => {
  try {
    const payroll = await Payroll.findByIdAndDelete(req.params.id);
    if (!payroll) return res.status(404).json({ message: 'Payroll record not found' });
    res.json({ message: 'Payroll record deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
