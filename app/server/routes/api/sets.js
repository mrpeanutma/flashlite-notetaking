const express = require('express');
const router = express.Router();
const CardSet = require('../../models/CardSet');
const Card = require('../../models/Card')
const bodyParser = require("body-parser");
const auth = require('../../middleware/auth');
// const { default: Card } = require('@/app/flashlite-components/Card');

// @route GET api/sets
router.get('/', (req, res) => {
    CardSet.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(404).json({ nosetfound: 'No Sets found'}))
});

// @route GET api/sets/:id
router.get('/:id', (req, res) => {
    CardSet.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({ nosetfound: 'No set found'}))
});

// @route POST api/sets
router.post('/', bodyParser.json(), (req, res) => {
    CardSet.create(req.body)
        .then((item) => res.json({ msg: 'Set added successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this set'}))
});

// router.post('/:id/new-card', bodyParser.json(), (req, res) => {
//     Card.create(req.body)
//     .then((item) => {
//         console.log(item);
//         CardSet.findByIdAndUpdate(req.params.id, 
//             {
//                 $push: {cards: item._id}
//             })
//         })
//         .then((item) => res.json({ msg: 'Set added successfully'}))
//         .catch((err) => res.status(400).json({err}))
// });

// @route POST api/sets/:id/new-card
router.post('/:id/new-card', bodyParser.json(), async (req,res) => {
    try {
        const {term, definition} = req.body;
        if (!term || !definition) {
            return res.status(400).json({msg: 'Please enter all fields'});
        }
        
        const newCard = new Card({term, definition});
        const savedCard = await newCard.save();

        CardSet.findById(req.params.id)
        .then((item) => {
            item.cards.push(savedCard._id);
            // CardSet.findByIdAndUpdate(req.params.id, {"cards": item.cards});
            // CardSet.findByIdAndUpdate(req.params.id, item);
            item.save();
            res.json({item});
        })
        .catch((err) => res.status(404).json({ nosetfound: 'No set found'}))
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
            res.json({ msg: 'updated successfully'})
        })
        .catch((err) => {console.log(err); res.status(400).json({ error: 'unable to update the db'});})
});

// @route DELETE api/sets/:id
router.delete('/:id', (req, res) => {
    CardSet.findByIdAndDelete(req.params.id)
        .then((item) => res.json({ msg: 'set entry deleted successfully'}))
        .catch((err) => res.status(404).json({ error: 'set does not exist'}))
});

module.exports = router;