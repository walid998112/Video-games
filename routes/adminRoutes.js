const express = require('express');
const User = require('../models/userModel');

const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, 'username email role'); // Fetch users
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Error fetching users' });
    }
});

// Add a game (example)
router.post('/games', (req, res) => {
    const { gameName } = req.body;
    // Implementation would depend on your games collection setup
    res.json({ message: `Game "${gameName}" added successfully!` });
});

module.exports = router;
