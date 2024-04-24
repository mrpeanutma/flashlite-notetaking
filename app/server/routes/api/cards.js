const express = require('express')
const router = express.Router()
const Card = require('../../models/Card')
const bodyParser = require("body-parser");

router.post('/', bodyParser.json(), (req, res) => {
    Card.create(req.body)
        .then((item) => res.json({ msg: 'Set added successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this set'}))
});

userRouter.post('/:id/new-card', auth, async (req,res) => {
    try {
        const {term, def} = req.body;
        if (!term || !def) {
            return res.status(400).json({msg: 'Please enter all fields'});
        }
        
        const newCard = new Card({term, def});
        const savedCard = await newCard.save();
        console.log(savedCard.term);

        CardSet.findById(req.params.id)
        .then((item) => {
            item.cards.push(savedCard._id);
            CardSet.findByIdAndUpdate(req.params.id, {"cards": item.cards});
            res.json({item});
        })
        .catch((err) => res.status(404).json({ nosetfound: 'No set found'}))
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.get('/:id', (req, res) => {
    Card.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({ nosetfound: 'No set found'}))
});

router.get('/', (req, res) => {
    Card.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(404).json({ nosetfound: 'No Sets found'}))
});

router.put('/:id', (req, res) => {
    Card.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({ msg: 'updated successfully'}))
        .catch((err) => res.status(400).json({ error: 'unable to update the db'}))
});

router.delete('/:id', (req, res) => {
    Card.findByIdAndDelete(req.params.id)
        .then((item) => res.json({ msg: 'set entry deleted successfully'}))
        .catch((err) => res.status(404).json({ error: 'set does not exist'}))
});

module.exports = router;
