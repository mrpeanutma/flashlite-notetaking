const express = require('express')
const router = express.Router()
const Card = require('../../models/Card')
const bodyParser = require("body-parser");

router.post('/', bodyParser.json(), (req, res) => {
    Card.create(req.body)
        .then((item) => res.json({ msg: 'Set added successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this set'}))
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

router.delete('/:id', async (req, res) => {

    CardSet.findOne({cards: req.params.id})
    .then((item) => {
        console.log('item is ' + item);
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
