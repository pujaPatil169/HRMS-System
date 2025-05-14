const Roster = require('../models/roster');

exports.getRosters = async (req, res) => {
  try {
    const rosters = await Roster.find();
    res.json(rosters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRosterById = async (req, res) => {
  try {
    const roster = await Roster.findById(req.params.id);
    if (!roster) return res.status(404).json({ message: 'Roster not found' });
    res.json(roster);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createRoster = async (req, res) => {
  try {
    const roster = new Roster(req.body);
    await roster.save();
    res.status(201).json(roster);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateRoster = async (req, res) => {
  try {
    const roster = await Roster.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!roster) return res.status(404).json({ message: 'Roster not found' });
    res.json(roster);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteRoster = async (req, res) => {
  try {
    const roster = await Roster.findByIdAndDelete(req.params.id);
    if (!roster) return res.status(404).json({ message: 'Roster not found' });
    res.json({ message: 'Roster deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
