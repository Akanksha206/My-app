const express = require('express');
const router = express.Router();
const { register, login, changePassword } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/change-password', authMiddleware, changePassword);

module.exports = router;
