require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose'); // require package
const methodOverride = require('method-override');
const morgan = require('morgan');

const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(methodOverride('_method'));
server.use(morgan('dev'));

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${ mongoose.connection.name }.`);
});

const Dog = require('./models/dogs');

server.listen(3030, () => {
  console.log("Listening on port 3030");
});
server.use(express.static('public'));

// Home
server.get('/', (req, res) => {
    res.render('index.ejs');
});

// New
server.get('/dogs/new', (req, res) => {
    res.render('dogs/new.ejs');
});

// Create
server.post('/dogs', async (req, res) => {
    if (req.body.isReadyToTakeHome === 'on') {
        req.body.isReadyToTakeHome = true;
    } else {
        req.body.isReadyToTakeHome = false;
    }
    await Dog.create(req.body);
    res.redirect('/dogs');
});

// Index
server.get('/dogs', async (req, res) => {

    const dogs = await Dog.find({});
    res.render('dogs/index.ejs', { dogs: dogs });
});

// Show
server.get('/dogs/:dogId', async (req, res) => {
    const foundDog = await Dog.findById(req.params.dogId);
    res.render("dogs/show.ejs", { dog: foundDog });
});

// Delete
server.delete('/dogs/:dogId', async (req, res) => {
    await Dog.findByIdAndDelete(req.params.dogId);
    res.redirect('/dogs');
});

// Edit
server.get('/dogs/:dogId/edit', async (req, res) => {
    const dog = await Dog.findById(req.params.dogId);
    res.render('dogs/edit.ejs', { dog: dog });
});

// Update
server.put('/dogs/:dogId', async (req, res) => {
    if (req.body.isReadyToTakeHome === 'on') {
        req.body.isReadyToTakeHome = true;
    } else {
        req.body.isReadyToTakeHome = false;
    }
    await Dog.findByIdAndUpdate(req.params.dogId, req.body);
    res.redirect('/dogs/' + req.params.dogId);
});