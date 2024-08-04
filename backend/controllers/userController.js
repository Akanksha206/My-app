const User = require('../models/User');

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
};

const addUser = async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, address, role });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getUsers, addUser };
