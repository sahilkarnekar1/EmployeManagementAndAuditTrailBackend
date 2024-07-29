const AuditTrail = require('../models/AuditTrail');

const getAuditTrail = async (req, res) => {
  try {
    const auditTrail = await AuditTrail.find({ employeeId: req.params.employeeId }).sort({ changedAt: -1 });
    res.status(200).json(auditTrail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAuditTrail };
