const express = require('express')
const router = express.Router()
const Item = require('../../models/Set')
const bodyParser = require("body-parser");

router.post('/', bodyParser.json(), (req, res) => {
    Item.create(req.body)
        .then((item) => res.json({ msg: 'Set added successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this set'}))
})

router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({ nosetfound: 'No set found'}))
})

router.get('/', (req, res) => {
    Item.find()
        .then((items) => res.json(items))
        .catch((err) => res.status(404).json({ nosetfound: 'No sets found'}))
})

router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({ msg: 'updated successfully'}))
        .catch((err) => res.status(400).json({ error: 'unable to update the db'}))
})

router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then((item) => res.json({ msg: 'set entry deleted successfully'}))
        .catch((err) => res.status(404).json({ error: 'set does not exist'}))
})
module.exports = router;