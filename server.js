const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', taskRoutes);

// Database connection
const connectDB = async () => {
  try {
    // URI ko dekhne ke liye console me print karo
    console.log('MongoDB URI:', process.env.MONGO_URI);

    // MongoDB URI ko use karte hue connection establish karo (No deprecated options)
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Agar connection nahi hota toh process ko exit karo
  }
};

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
