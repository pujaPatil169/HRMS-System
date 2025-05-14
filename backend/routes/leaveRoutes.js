const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {
  getLeaveRequests,
  getLeaveRequestById,
  createLeaveRequest,
  updateLeaveRequest,
  deleteLeaveRequest,
} = require('../controllers/leaveController');

const router = express.Router();

router.use(authMiddleware(['admin', 'employee', 'superadmin']));

router.get('/', getLeaveRequests);
router.get('/:id', getLeaveRequestById);
router.post('/', createLeaveRequest);
router.put('/:id', updateLeaveRequest);
router.delete('/:id', deleteLeaveRequest);

module.exports = router;
