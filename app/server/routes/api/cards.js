const express = require('express')
const router = express.Router();
const bodyParser = require("body-parser");

const Card = require('../../models/Card');
const CardSet = require('../../models/CardSet');


// @route GET api/cards
router.get('/', (req, res) => {
    Card.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(404).json({ nosetfound: 'No Sets found'}))
});

// @route GET api/cards/:id
router.get('/:id', (req, res) => {
    Card.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({ nosetfound: 'No set found'}))
});

// @route POST api/cards
router.post('/', bodyParser.json(), (req, res) => {
    Card.create(req.body)
        .then((item) => res.json({ msg: 'Set added successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this set'}))
});

// @route PUT api/cards/:id
router.put('/:id', bodyParser.json(), (req, res) => {
    Card.findById(req.params.id)
        .then((item) => {
            item.term = req.body.term;
            item.definition = req.body.definition;
            item.save();
            res.json({ msg: 'updated successfully'})
        })
        .catch((err) => {console.log(err); res.status(400).json({ error: 'unable to update the db'});})
});

// @route DELETE api/cards/:id
router.delete('/:id', async (req, res) => {

    CardSet.findOne({cards: req.params.id})
    .then((item) => {
        item.cards.pull(req.params.id);
        item.save();
    })
    // .then(() => {
    //     Card.findByIdAndDelete(req.params.id)
    // })
    .then((item) => res.json({msg: 'Set entry deleted successfully'}))
    .catch((err) => res.status(400).json({ error: err}))
});

module.exports = router;
