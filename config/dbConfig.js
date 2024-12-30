const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection URI
const MONGO_URI = process.env.MONGO_URI || ' mongodb://127.0.0.1:27017';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });

module.exports = mongoose;
