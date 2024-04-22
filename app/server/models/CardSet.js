const mongoose = require('mongoose');

const CardSetSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    image: {
      type: URL,
    },
    cards: {
      type: [Card],
      required: true
    }
});

module.exports = CardSet = mongoose.model('set', CardSetSchema);
