const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String,
    },
    birthday: {
        type: Date,
        default: Date.now,
    },
    card_sets: {
        type: Array,
        default: [],
    }
});

module.exports = User = mongoose.model('User', UserSchema);