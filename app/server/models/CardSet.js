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
      type: String,
    },
    cards: {
      type: [Card],
      required: true
    },
    public: {
      type: boolean,
      default: false
    }

});

module.exports = CardSet = mongoose.model('set', CardSetSchema);
