const mongoose = require('mongoose');
const { Schema } = mongoose;

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
      type: [{ type: Schema.Types.ObjectId, ref: 'Card'}],
      required: true
    },
    public: {
      type: Boolean,
      default: false
    }

});

module.exports = CardSet = mongoose.model('Set', CardSetSchema);
