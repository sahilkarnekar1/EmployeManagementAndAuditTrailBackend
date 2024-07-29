const mongoose = require('mongoose');

const auditTrailSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  oldData: { type: Object, required: true },
  newData: { type: Object, required: true },
  changedAt: { type: Date, default: Date.now }
});

const AuditTrail = mongoose.model('AuditTrail', auditTrailSchema);
module.exports = AuditTrail;
