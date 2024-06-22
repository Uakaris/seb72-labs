const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        res.render('foods/index.ejs', {
            pantry: user.pantry,
            user: user
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/new', (req, res) => {
    res.render('foods/new.ejs');
});

router.post('/', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        user.pantry.push(req.body);
        await user.save();
        res.redirect(`/users/${ user._id }/foods`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.get('/:id/edit', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        const pantryItem = user.pantry.id(req.params.id);
        res.render('foods/edit.ejs', {
            user: user,
            pantryItem: pantryItem
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        const pantryItem = user.pantry.id(req.params.id);
        pantryItem.set(req.body);
        await user.save();
        res.redirect(`/users/${ user._id }/foods`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.session.user._id);
        user.pantry.id(req.params.id).deleteOne();
        await user.save();
        res.redirect(`/users/${ user._id }/foods`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// router.get('/:id', async (req, res) => {
//     try {
//         const user = await User.findbyId(req.session.user._id);
//         const food = user.foods.id(req.params.id);
//         res.render('foods/show.ejs', {
//             food: food
//         });
//     } catch (error) {
//         console.log(error);
//         res.redirect('/');
//     }
// });



module.exports = router;
