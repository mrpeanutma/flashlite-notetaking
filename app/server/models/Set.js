const mongoose = require('mongoose');

const SetSchema = new mongoose.Schema({
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

module.exports = Set = mongoose.model('set', SetSchema);