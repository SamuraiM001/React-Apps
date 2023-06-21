const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const productdb = require('./productdb');
const Usersdb = require("./usersdb")
const temp = path.join(__dirname, '../templates');

app.use(express.urlencoded({ extended: false })); // Parse URL-encoded form data
app.use(express.json()); // Parse JSON data
app.set('view engine', 'hbs');
app.set('views', temp);

app.get('/', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', async (req, res) => {
  await Usersdb.insertMany([
    {
      username: req.body.name,
      password: req.body.password,
    },
  ]);
  res.render('home');
});

app.post('/login', async (req, res) => {
    try{
        const check = await Usersdb.findOne(
            {
                username: req.body.name,
            },
            );
            if(check.password === req.body.password)
            res.render('home');
            else{
                console.log("Wrong")
            }
        }
        catch{
            console.log("Error")
        }
});

app.listen(3000, () => {
  console.log('Server connected on port 3000');
});
