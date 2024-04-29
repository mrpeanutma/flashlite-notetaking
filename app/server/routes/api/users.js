require ('dotenv').config({path: '../.env'});
const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const bodyParser = require('body-parser');

const User = require('../../models/User');

module.exports = userRouter;

// @route POST api/users/signup
userRouter.post('/signup', bodyParser.json(), async (req,res) => {
    try {
        const {username, email, password} = req.body;

        if (!email || !password || ! username) {
            return res.status(400).json({msg: 'Please enter all fields.'});
        }
        if (password.length < 6) {}

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({msg: 'User already exists with this email.'});
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const card_sets = [];
        const newUser = new User({email, password: hashedPassword, username, card_sets: card_sets});

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        console.log("Error in Signup");
        res.status(500).json({error: err.message});
    }
});

// @route POST api/users/login
userRouter.post('/login', bodyParser.json(), async (req,res) => {
    try {
        const {username, email, password} = req.body;
        if((!username && !email) || !password) {
            return res.status(400).json({msg: 'Please enter all fields.'});
        }

        // const user = await User.findOne({userID});
        let user;
        if (username) {
            user = await User.findOne({username});
        } else {
            user = await User.findOne({email});
        }

        if (!user) {
            return res
            .status(400)
            .json({msg: 'User with this email or username does not exist.'});
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({msg: 'Invalid username and password combination.'});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.json({token, user: {id: user._id, username: user.username}}); //Token and user data stored
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err.message});
    }
});

//Used to test if the user is still logged in
userRouter.post("/tokenIsValid", auth, async (req,res) => {
    try {
        const token = req.header("Authorization");
        if (!token) {return res.json(false);}

        const verified = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
        if(!verified) {return res.json(false);}

        const user = await User.findByID(verified.id);
        if(!user) {return res.json(false);}

    }  catch (err) {
        res.status(500).json({error: err.message});
    }
});