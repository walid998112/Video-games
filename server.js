const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const path = require('path');

// Models
const User = require('./models/userModel');

// Initialize Express app
const app = express();
const PORT = 3000;

// MongoDB Connection
const MONGO_URI = 'mongodb://127.0.0.1:27017'; // Replace this with your MongoDB connection string if needed.
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'your_secret_key', // Replace with a strong secret for production
        resave: false,
        saveUninitialized: true,
    })
);
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Signup route
app.post('/api/auth/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.json({ message: 'Signup successful' });
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(500).json({ message: 'Error during signup' });
    }
});

// Login route
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Account does not exist' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        req.session.userId = user._id;
        req.session.role = user.role;

        res.json({ message: 'Login successful', role: user.role });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Error during login' });
    }
});

// Admin route: Get all users
app.get('/api/admin/users', async (req, res) => {
    try {
        const users = await User.find({}, 'username email role');
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Error fetching users' });
    }
});

// Admin route: Add a game (Example)
app.post('/api/admin/games', (req, res) => {
    const { gameName } = req.body;
    // Logic to add games will go here (e.g., save to a games collection)
    res.json({ message: `Game "${gameName}" added successfully!` });
});

// Default route for testing
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
