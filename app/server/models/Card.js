// const schema = new Mongoose.Schema({name: 'string', size: 'string'});
// const ExModel = mongoose.model
const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    front: {
        type: String,
        required: true,
    },
    back: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
});

module.exports = Card = mongoose.model('card', CardSchema);