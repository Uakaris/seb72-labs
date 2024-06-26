const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');

const passUserToViews = require('./middleware/passUserToViews.js');
const ensureLoggedIn = require('./middleware/ensureLoggedIn.js');

const authController = require('./controllers/auth.js');
const foodController = require('./controllers/food.js');
const socialsController = require('./controllers/socials.js');

const port = process.env.PORT ? process.env.PORT : '3000';

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passUserToViews);

app.get('/', (req, res) => {
  res.render('index.ejs', {
    user: req.session.user,
  });
});


app.use('/auth', authController);
app.use('/socials', socialsController);
app.use('/users/:userId/foods', ensureLoggedIn, foodController);
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
