const express = require('express');
const { getAuditTrail } = require('../controllers/auditTrailController');
const router = express.Router();

router.get('/:employeeId', getAuditTrail);

module.exports = router;
