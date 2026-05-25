const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('This is a simple message from the Express server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export the app for testing purposes