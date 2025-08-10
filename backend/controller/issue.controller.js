const Issue = require('../models/issue.model.js');
const Flag = require('../models/flag.model.js');
const StatusLog = require('../models/statuslog.model.js');

exports.createIssue = async (req, res) => {
  try {
        console.log("Received Coordinates:", req.body.location?.coordinates);

    const issue = await Issue.create({
      ...req.body,
      location: {
        type: 'Point',
coordinates: req.body.location.coordinates
      }
    });

    res.status(201).json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNearbyIssues = async (req, res) => {
  const { lat, lng, radius = 3 } = req.query;
  try {
    const issues = await Issue.find({
      location: {
        $nearSphere: {
          $geometry: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
          $maxDistance: parseFloat(radius) * 1000
        }
      },
      hidden: false
    });
    res.json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.flagIssue = async (req, res) => {
  const { id } = req.params;
  const { userId, reason } = req.body;

  try {
    const exists = await Flag.findOne({ issueId: id, flaggedBy: userId });
    if (exists) return res.status(409).json({ msg: 'Already flagged' });

    await Flag.create({ issueId: id, flaggedBy: userId, reason });
    const updated = await Issue.findByIdAndUpdate(id, { $inc: { flagCount: 1 } });

    if (updated.flagCount + 1 >= 3) {
      await Issue.findByIdAndUpdate(id, { hidden: true });
    }

    res.json({ msg: 'Flagged' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getIssueById = async (req, res) => {
  const { id } = req.params;
  try {
    const issue = await Issue
      .findById(id)
      .populate('photos')
      .populate('reporterName', 'username email phone isAnonymous');
    if (!issue) return res.status(404).json({ message: 'Issue not found' });
    res.json(issue);
  }
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { newStatus, updatedBy } = req.body;

  try {
    const issue = await Issue.findByIdAndUpdate(id, { status: newStatus }, { new: true });
    await StatusLog.create({ issueId: id, status: newStatus, updatedBy });
    res.json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
