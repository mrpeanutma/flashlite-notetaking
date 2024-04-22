const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        requires: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile_image: {
      type: URL,
    },
    birthday: {
        type: Date,
        default: Date.now,
    },
    card_sets: {
        type: Array,
    }
});

module.exports = User = mongoose.model('user', UserSchema);