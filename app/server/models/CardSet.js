const mongoose = require('mongoose')

const CardSetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    creator: {
      type: String,
      required: true,
    },
    image: {
      type: URL,
    },
    updated_date: {
        type: Date,
        default: Date.now,
    },
    cards: {
      type: Array,
      default: [],
    }
});

module.exports = CardSet = mongoose.model('set', CardSetSchema);