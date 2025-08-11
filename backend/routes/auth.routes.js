const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller.js');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/me', authController.verifyToken, authController.getUserProfile);

module.exports = router;