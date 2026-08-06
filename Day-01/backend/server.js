const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON data
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello, Express Backend Server is Running!');
});

// Sample API Route for Internship Task
app.get('/api/status', (req, res) => {
  res.json({
    message: 'Backend API is successfully connected!',
    status: 'Success'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});