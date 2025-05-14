const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {
  getContractors,
  getContractorById,
  createContractor,
  updateContractor,
  deleteContractor,
} = require('../controllers/contractorController');

const router = express.Router();

router.use(authMiddleware(['admin', 'superadmin']));

router.get('/', getContractors);
router.get('/:id', getContractorById);
router.post('/', createContractor);
router.put('/:id', updateContractor);
router.delete('/:id', deleteContractor);

module.exports = router;
