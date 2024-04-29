const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new mongoose.Schema({
    
    term: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    },
    inSet: { 
        type: Schema.Types.ObjectId, 
        ref: 'Card',
        required: true
    }

});

module.exports = Card = mongoose.model('Card', CardSchema);