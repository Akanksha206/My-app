const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, address });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  // login logic
};

const changePassword = async (req, res) => {
  // change password logic
};

module.exports = { register, login, changePassword };
