const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
    
    term: {
        type: String,
        required: true,
    },
    definition: {
        type: String,
    }
});

module.exports = Card = mongoose.model('Card', CardSchema);