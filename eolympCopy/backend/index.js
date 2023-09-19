const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Define a route to get a list of problems
app.get('/problems', (req, res) => {
  // Read the problems from the JSON file
  fs.readFile('problems.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const problems = JSON.parse(data);
    res.json({ problems });
  });
});
app.get('/problems/:index', (req, res) => {
  try {
    // Read the JSON file containing problem data
    const rawData = fs.readFileSync('problems.json', 'utf-8');
    const problems = JSON.parse(rawData);

    // Get the problem index from the URL parameters
    const index = parseInt(req.params.index);

    // Check if the index is valid
    if (index >= 0 && index < problems.length) {
      const problem = problems[index];
      res.json(problem);
    } else {
      res.status(404).json({ message: 'Problem not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
