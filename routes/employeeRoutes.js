const express = require('express');
const { createEmployee, updateEmployee, getEmployees, getEmployeeById } = require('../controllers/employeeController');
const router = express.Router();

router.post('/create', createEmployee);
router.put('/update/:id', updateEmployee);
router.get('/all', getEmployees);
router.get('/:id', getEmployeeById);

module.exports = router;
