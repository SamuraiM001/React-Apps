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
    Author:"Zenfira Əsgərova",
    TESTNAME: "TEST1",
    Subject:"Ana Dili",
    CLASS: "9",
    DIFFICULTY:"Çətin",
    QUESTIONS: [
      {
        QUESTION: "What is the name of the capital of Azerbaijan",
        ANSWERS: ["Baku", "Gandja", "Samaxi"],
        TYPE: "singleAnswered",
        RIGHTANSWER: "1",
        SCORE: "Çətin",
      },
      {
        QUESTION: "What is the name of the capital of Turkiye",
        ANSWERS: ["Ankara", "Istanbul", "Baku"],
        TYPE: "singleAnswered",
        SCORE: "Çətin",
        RIGHTANSWER: "1",
      },
    ],
  },
  {
    id: 1,
    Author:"Zenfira Əsgərova",
    TESTNAME: "TEST2",
    CLASS: "5",
    DIFFICULTY:"Çətin",
    Subject:"Ana Dili",
    QUESTIONS: [
      {
        QUESTION: "What is the name of the capital of Azerbaijan",
        ANSWERS: ["Baku", "Gandja", "Samaxi"],
        RIGHTANSWER: "1",
        SCORE: "Çətin",
      },
      {
        QUESTION: "What is the name of the capital of Turkiye",
        ANSWERS: ["Ankara", "Istanbul", "Baku"],
        RIGHTANSWER: "1",
        SCORE: "Çətin",
      },
    ],
  },
];


const users = [{
    id: 0,
    name: "Nasim Abışov",
    Subject:"Kimya",
    UTISCode: "789012",
    password: "password456",
    userType:"TEACHER"
  },
  {
    id: 1,
    name: "Zenfira Əsgərova",
    Subject:"Ana Dili",
    UTISCode: "123456",
    password: "password123",
    userType:"STUDENT"
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

app.post('/login', (req, res) => {
  const { UTISCode, password } = req.body;

  // Find the user with the corresponding UTISCode and password
  const user = users.find((user) => user.UTISCode === UTISCode && user.password === password);
 
  if (user) {
    // Return the user's name, second name, and class
    const { name, secondName,Subject, userType } = user;
    res.json({ name, secondName, Subject,userType });
  } else {
    res.status(401).send('Invalid UTISCode or password');
  }
});

// Start the server
app.listen(8000, () => {
  console.log('Server started on port 8000');
});
