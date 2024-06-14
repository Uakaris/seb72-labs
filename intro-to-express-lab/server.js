const express = require ('express');
// const morgan = require('morgan');

const server = express();
// server.use(morgan('dev'));

server.listen(3333, () => {
    console.log('Server is listening at http://localhost:3333');
});

server.get('/welcome/:username', (req, res) => {
    res.send(`${ req.params.username }! Hello there 🦄`);
});

server.get('/roll/:numberParameter', (req, res) => {
   const numberParameter = req.params.numberParameter;

   if (isNaN(numberParameter)) {
    return res.send('You must specify a number!');
   }

   const randomNum = Math.floor(Math.random() * parseInt(numberParameter));

   res.send(`You rolled a ${ randomNum }!`);
});

server.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index);

    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];

    if (index < 0 || index >= collectibles.length) {
        return res.send('This item is not yet in stock. Check back soon!');
    }

    const item = collectibles[index];
    const response = `So, you want the ${ item.name }? For ${ item.price}, it can be yours!`;
    res.send(response);
});

server.get('/shoes', (req, res) => {
    const minPrice = parseInt(req.query['min-price']);
    const maxPrice = parseInt(req.query['max-price']);
    const type = req.query.type;

    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];

    let filteredShoes = shoes;

    if (!isNaN(minPrice)) {
        filteredShoes = filteredShoes.filter(shoes => shoes.price >= minPrice);
    }
    if (!isNaN(maxPrice)) {
        filteredShoes = filteredShoes.filter(shoes => shoes.price <= maxPrice);
    }
    if (type) {
        filteredShoes = filteredShoes.filter(shoes => shoes.type === type);
    }
    res.json(filteredShoes);
});