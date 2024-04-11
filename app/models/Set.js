const mongoose = require('mongoose')

const setSchema = new mongoose.Schema({
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
    updated_date: {
        type: Date,
        default: Date.now,
    }
})