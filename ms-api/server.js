const express = require('express');
const path = require('path');

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../ms-web/build')));

// Handle API requests.
// Put all API endpoints under /api
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// Remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../ms-web/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
