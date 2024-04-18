const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
// var bodyParser = require('body-parser');

const User = require('../../models/User');

module.exports = router;

// router.get('/', (req,res) => {
//     Item.find()
//     .then((items) => res.json(items))
//     .catch((err) => res.status(404).json({noitemsfound: 'No Items Found'}))
// });
// router.get('/:id', (req,res) => {
//     Item.findById(req.params.id)
//     .then((item) => res.json(item))
//     .catch((err) => res.status(400).json({error: 'No Item Found'}))
// });

// router.post('/signup', bodyParser.json(), (req,res) => {
userRouter.post('/signup', async (req,res) => {
    try {
        const {email, password, confirmPassword, username} = req.body;
        if (!email || !password || !confirmPassword || ! username) {
            return res.status(400).json({msg: 'Please enter all fields'});
        }
        if (password.length < 6) {}
        if (confirmPassword !== password) {
            return res.status(400).json({msg: 'Passwords must match'});
        }
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({msg: 'User already exists with this email'});
        }
        const hashedPassword = await bcryptjs.hash(passowrd, 8);
        const cards = [];
        const newUser = new User({email, password: hashedPassword, username, card_sets: cards});

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

userRouter.post('/login', async (req,res) => {
    try {
        const {userID, password} = req.body;
        if(!userID || !password) {
            return res.status(400).json({msg: 'Please enter all fields'});
        }

        const user = await User.findOne({email});
    } catch (err) {

    }
});

// router.put('/:id', (req,res) => {
//     Item.findByIdAndUpdate(req.params.id, req.body)
//     .then((item) => res.json({msg: 'Item Updated Successfully'}))
//     .catch((err) => res.status(400).json({error: 'Unable to Update the Database'}))
// });

// router.delete('/:id', (req,res) => {
//     Item.findByIdAndDelete(req.params.id, req.body)
//     .then((item) => res.json({msg: 'Item Deleted Successfully'}))
//     .catch((err) => res.status(400).json({error: 'Unable to Find Specified Item'}))
// });