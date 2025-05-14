const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {
  getPayrolls,
  getPayrollById,
  createPayroll,
  updatePayroll,
  deletePayroll,
} = require('../controllers/payrollController');

const router = express.Router();

router.use(authMiddleware(['admin', 'superadmin']));

router.get('/', getPayrolls);
router.get('/:id', getPayrollById);
router.post('/', createPayroll);
router.put('/:id', updatePayroll);
router.delete('/:id', deletePayroll);

module.exports = router;
