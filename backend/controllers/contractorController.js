const Contractor = require('../models/contractor');

exports.getContractors = async (req, res) => {
  try {
    const contractors = await Contractor.find();
    res.json(contractors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getContractorById = async (req, res) => {
  try {
    const contractor = await Contractor.findById(req.params.id);
    if (!contractor) return res.status(404).json({ message: 'Contractor not found' });
    res.json(contractor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createContractor = async (req, res) => {
  try {
    const contractor = new Contractor(req.body);
    await contractor.save();
    res.status(201).json(contractor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateContractor = async (req, res) => {
  try {
    const contractor = await Contractor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contractor) return res.status(404).json({ message: 'Contractor not found' });
    res.json(contractor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteContractor = async (req, res) => {
  try {
    const contractor = await Contractor.findByIdAndDelete(req.params.id);
    if (!contractor) return res.status(404).json({ message: 'Contractor not found' });
    res.json({ message: 'Contractor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
