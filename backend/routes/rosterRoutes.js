const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {
  getRosters,
  getRosterById,
  createRoster,
  updateRoster,
  deleteRoster,
} = require('../controllers/rosterController');

const router = express.Router();

router.use(authMiddleware(['admin', 'superadmin']));

router.get('/', getRosters);
router.get('/:id', getRosterById);
router.post('/', createRoster);
router.put('/:id', updateRoster);
router.delete('/:id', deleteRoster);

module.exports = router;
