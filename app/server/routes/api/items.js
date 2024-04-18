const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const Item = require('../../models/Item');

module.exports = router;

router.get('/', (req,res) => {
    Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({noitemsfound: 'No Items Found'}))
});
router.get('/:id', (req,res) => {
    Item.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json({error: 'No Item Found'}))
});

router.post('/', bodyParser.json(), (req,res) => {
    Item.create(req.body)
    .then((item) => res.json({msg: 'Item Added Successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to Add This Item'}))
});

router.put('/:id', (req,res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({msg: 'Item Updated Successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to Update the Database'}))
});

router.delete('/:id', (req,res) => {
    Item.findByIdAndDelete(req.params.id, req.body)
    .then((item) => res.json({msg: 'Item Deleted Successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to Find Specified Item'}))
});