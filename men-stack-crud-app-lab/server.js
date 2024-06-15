require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose'); // require package

const server = express();

server.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${ mongoose.connection.name }.`);
});

const Dog = require('./models/dogs');

server.listen(3030, () => {
  console.log("Listening on port 3030");
});

server.get('/', (req, res) => {
    res.render('index.ejs');
});

server.get('/dogs/new', (req, res) => {
    res.render('dogs/new.ejs');
});

server.post('/dogs', async (req, res) => {
    if (req.body.isReadyToTakeHome === 'on') {
        req.body.isReadyToTakeHome = true;
    } else {
        req.body.isReadyToTakeHome = false;
    }
    await Dog.create(req.body);
    res.redirect('/dogs');
});

server.get('/dogs', async (req, res) => {

    const dogs = await Dog.find({});
    res.render('dogs/index.ejs', { dogs: dogs });
});

server.get('/dogs/:dogId', async (req, res) => {
    const foundDog = await Dog.findById(req.params.dogIdId);
    res.render("dogs/show.ejs", { dog: foundDog });
});