const Employee = require('../models/Employee');
const AuditTrail = require('../models/AuditTrail');

const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEmployee = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      const oldData = { ...employee._doc }; // Capture the old data
  
      Object.assign(employee, req.body); // Update the employee with new data
  
      await employee.save();
  
      const newData = { ...employee._doc }; // Capture the new data
  
      // Create an audit trail entry
      const auditTrail = new AuditTrail({
        employeeId: employee._id,
        oldData,
        newData
      });
  
      await auditTrail.save();
  
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createEmployee, updateEmployee, getEmployees, getEmployeeById };
