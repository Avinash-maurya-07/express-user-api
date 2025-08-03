const User = require('../models/user');
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch users" });
  }
};
exports.getUserById = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const user = await User.findOne({ id });
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ error: "Error retrieving user" });
  }
};

exports.createUser = async (req, res) => {
  const { id, name, email, age, country } = req.body;

  if (!id || !name || !email) {
    return res.status(400).json({ status: "error", message: "Missing required fields" });
  }

  try {
    const existing = await User.findOne({ id });
    if (existing) return res.status(409).json({ error: "User ID already exists" });

    const newUser = new User({ id, name, email, age, country });
    await newUser.save();
    return res.status(201).json({ message: "New user created", user: newUser });
  } catch (err) {
    return res.status(500).json({ error: "Failed to save user" });
  }
};
exports.updateUser = async (req, res) => {
  const id = Number(req.params.id);
  const updates = req.body;

  try {
    const user = await User.findOneAndUpdate({ id }, updates, { new: true });
    if (!user) return res.status(404).json({ error: "User not found" });

    return res.status(200).json({ message: "User updated", user });
  } catch (err) {
    return res.status(500).json({ error: "Update failed" });
  }
};
exports.deleteUser = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const result = await User.deleteOne({ id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ message: `User ${id} deleted` });
  } catch (err) {
    return res.status(500).json({ error: "Deletion failed" });
  }
};
