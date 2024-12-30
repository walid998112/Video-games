const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true });

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
