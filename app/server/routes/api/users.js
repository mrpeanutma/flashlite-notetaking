const express = require('express');
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
// var bodyParser = require('body-parser');

const User = require('../../models/User');

module.exports = userRouter;

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
    console.log("In Server Route: Signup");
    try {
        const {username, email, password} = req.body;
        // const {email, password, confirmPassword, username} = req.body;
        // if (!email || !password || !confirmPassword || ! username) {
        if (!email || !password || ! username) {
            console.log("Empty Fields");
            return res.status(400).json({msg: 'Please enter all fields'});
        }
        if (password.length < 6) {}
        // if (confirmPassword !== password) {
        //     return res.status(400).json({msg: 'Passwords must match'});
        // }
        const existingUser = await User.findOne({email});
        if (existingUser) {
            console.log("Existing User");
            return res.status(400).json({msg: 'User already exists with this email'});
        }
        const hashedPassword = await bcryptjs.hash(passowrd, 8);
        console.log("password:", password, " Hashed:", hashedPassword);
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

userRouter.post('/login', auth, async (req,res) => {
    try {
        const {username, email, password} = req.body;
        if((!username && !email) || !password) {
            return res.status(400).json({msg: 'Please enter all fields'});
        }

        const user = await User.findOne({userID});
        if (!username) {
            user = await User.findOne({username});
        } else {
            user = await User.findOne({email});
        }

        if (!user) {
            return res.status(400).json({msg: 'User with this email or username alreay exists'});
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({msg: 'User with this email or username alreay exists'});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.json({token, user: {id: user._id, username: user.username}}); //Token and user data stored
    } catch (err) {
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