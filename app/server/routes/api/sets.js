const express = require('express');
const router = express.Router();
const CardSet = require('../../models/CardSet');
const Card = require('../../models/Card')
const bodyParser = require("body-parser");
const auth = require('../../middleware/auth');

// @route GET api/sets
router.get('/', (req, res) => {
    CardSet.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(404).json({ nosetfound: 'No sets found.'}))
});

// @route GET api/sets/:id
router.get('/:id', (req, res) => {
    CardSet.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({ nosetfound: 'No set found.'}))
});

// @route POST api/sets
router.post('/', bodyParser.json(), (req, res) => {
    CardSet.create(req.body)
        .then((item) => res.json({ msg: 'Set added successfully!'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this set.'}))
});

// @route POST api/sets/:id/new-card
router.post('/:id/new-card', bodyParser.json(), async (req,res) => {
    try {
        const {term, definition} = req.body;
        if (!term || !definition) {
            return res.status(400).json({msg: 'Please enter all fields.'});
        }
        
        const newCard = new Card({
            term,
            definition,
            inSet: req.params.id
        });
        const savedCard = await newCard.save();

        CardSet.findById(req.params.id)
        .then((item) => {
            item.cards.push(savedCard._id);
            // CardSet.findByIdAndUpdate(req.params.id, {"cards": item.cards});
            // CardSet.findByIdAndUpdate(req.params.id, item);
            item.save();
            res.json({item});
        })
        .catch((err) => res.status(404).json({ nosetfound: 'No set found.'}))
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// @route PUT api/sets/:id
router.put('/:id', bodyParser.json(), (req, res) => {
    CardSet.findById(req.params.id)
        .then((item) => {
            item.title = req.body.title;
            item.image = req.body.image;
            item.save();
            res.json({ msg: 'Updated successfully!'})
        })
        .catch((err) => {console.log(err); res.status(400).json({ error: 'Unable to update the database.'});})
});

// @route DELETE api/sets/:id
router.delete('/:id', (req, res) => {
    CardSet.findByIdAndDelete(req.params.id)
        .then((item) => res.json({ msg: 'Set entry deleted successfully'}))
        .catch((err) => res.status(404).json({ error: 'Set does not exist.'}))
});

module.exports = router;