const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Test data
const tests = [
  {
    id: 0,
    TESTNAME: "TEST1",
    CLASS: "9C",
    QUESTIONS: [
      {
        QUESTION: "What is the name of the capital of Azerbaijan",
        ANSWERS: ["Baku", "Gandja", "Samaxi"],
        TYPE: "singleAnswered",
        RIGHTANSWER: "1",
        SCORE: 20,
      },
      {
        QUESTION: "What is the name of the capital of Turkiye",
        ANSWERS: ["Ankara", "Istanbul", "Baku"],
        TYPE: "singleAnswered",
        SCORE: 20,
        RIGHTANSWER: "1",
      },
    ],
  },
  {
    id: 1,
    TESTNAME: "TEST2",
    CLASS: "5C",
    QUESTIONS: [
      {
        QUESTION: "What is the name of the capital of Azerbaijan",
        ANSWERS: ["Baku", "Gandja", "Samaxi"],
        RIGHTANSWER: "1",
        SCORE: 20,
      },
      {
        QUESTION: "What is the name of the capital of Turkiye",
        ANSWERS: ["Ankara", "Istanbul", "Baku"],
        RIGHTANSWER: "1",
        SCORE: 20,
      },
    ],
  },
];

// User data
const users = [
  {
    id: 1,
    name: "John",
    secondName: "Doe",
    UTISCode: "123456",
    password: "password123",
    class: "9C",
  },
  {
    id: 2,
    name: "Jane",
    secondName: "Smith",
    UTISCode: "789012",
    password: "password456",
    class: "5C",
  },
];
const valid = [];

// GET request to retrieve test data by ID
app.get('/tests', (req, res) => {
  res.json(tests);
});
app.get('/gradesof/:utis', (req, res) => {
  const { utis } = req.params;
  const filteredGrades = valid.filter((item) => item.userCode === parseInt(utis));
  res.json(filteredGrades);
});

app.get('/isvalid/:utiscode/:id', (req, res) => {
  const { utiscode, id } = req.params;
  const test = valid.find((item) => item.testId === parseInt(id));
  const check = valid.find((item) => item.userCode === parseInt(utiscode));
  
  if (test && check) {
    res.json(test.result);
  } else {
    res.sendStatus(201);
  }
});

app.get('/validate/:utiscode/:id/:result', (req, res) => {
  const { utiscode, id, result } = req.params;
  const test = tests.find((item) => item.id === parseInt(id));
  const addeddata = {
    testName: test.TESTNAME,
    userCode: parseInt(utiscode),
    testId: parseInt(id),
    result: parseInt(result),
  };
  valid.push(addeddata);
  res.sendStatus(200);
});

app.get('/tests/:id', (req, res) => {
  const { id } = req.params;

  // Find the test with the corresponding ID
  const test = tests.find((test) => test.id === parseInt(id));

  if (test) {
    res.json(test);
  } else {
    res.status(404).send('Test not found');
  }
});

// POST request for user login
app.post('/login', (req, res) => {
  const { UTISCode, password } = req.body;

  // Find the user with the corresponding UTISCode and password
  const user = users.find((user) => user.UTISCode === UTISCode && user.password === password);

  if (user) {
    // Return the user's name, second name, and class
    const { name, secondName, class: userClass } = user;
    res.json({ name, secondName, class: userClass });
  } else {
    res.status(401).send('Invalid UTISCode or password');
  }
});

// Start the server
app.listen(8000, () => {
  console.log('Server started on port 8000');
});
