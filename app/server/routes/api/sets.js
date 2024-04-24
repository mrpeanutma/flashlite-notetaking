const express = require('express');
const router = express.Router();
const CardSet = require('../../models/CardSet');
const Card = require('../../models/Card')
const bodyParser = require("body-parser");
// const { default: Card } = require('@/app/flashlite-components/Card');

router.post('/', bodyParser.json(), (req, res) => {
    CardSet.create(req.body)
        .then((item) => res.json({ msg: 'Set added successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this set'}))
});

router.post('/:id/new-card', bodyParser.json(), (req, res) => {
    CardSet.findByIdAndUpdate(req.params.id, 
        {
            $push: {cards: req.body}
        })
        .then((item) => res.json({ msg: 'Set added successfully'}))
        .catch((err) => res.status(400).json({err}))
});

router.get('/:id', (req, res) => {
    CardSet.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({ nosetfound: 'No set found'}))
});

router.get('/', (req, res) => {
    CardSet.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(404).json({ nosetfound: 'No Sets found'}))
});

router.put('/:id', (req, res) => {
    CardSet.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({ msg: 'updated successfully'}))
        .catch((err) => res.status(400).json({ error: 'unable to update the db'}))
});

router.delete('/:id', (req, res) => {
    CardSet.findByIdAndDelete(req.params.id)
        .then((item) => res.json({ msg: 'set entry deleted successfully'}))
        .catch((err) => res.status(404).json({ error: 'set does not exist'}))
});

module.exports = router;