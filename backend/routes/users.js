const express = require('express');
const router = express.Router();
const { getUsers, addUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, getUsers);
router.post('/', authMiddleware, addUser);

module.exports = router;
