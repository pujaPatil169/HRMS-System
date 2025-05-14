const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {
  getAttendanceRecords,
  getAttendanceById,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} = require('../controllers/attendanceController');

const router = express.Router();

router.use(authMiddleware(['admin', 'employee', 'superadmin']));

router.get('/', getAttendanceRecords);
router.get('/:id', getAttendanceById);
router.post('/', createAttendance);
router.put('/:id', updateAttendance);
router.delete('/:id', deleteAttendance);

module.exports = router;
