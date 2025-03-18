const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Routes
app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${port}`);
});