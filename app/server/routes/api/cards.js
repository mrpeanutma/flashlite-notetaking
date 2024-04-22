const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const Item = require('../../models/Card');

module.exports = router;

router.get('/', (req,res) => {
    Card.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({noitemsfound: 'No cards found'}))
});
router.get('/:id', (req,res) => {
    Card.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json({error: 'No card found'}))
});

router.post('/', bodyParser.json(), (req,res) => {
    Card.create(req.body)
    .then((item) => res.json({msg: 'Card added successfully'}))
    .catch((err) => res.status(400).json({error: 'unable to add this card'}))
});

router.put('/:id', (req,res) => {
    Card.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({msg: 'Card updated successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to update the database'}))
});

router.delete('/:id', (req,res) => {
    Item.findByIdAndDelete(req.params.id, req.body)
    .then((item) => res.json({msg: 'Card deleted successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to find specified card'}))
});