const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    body: String,
    commenter: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('comments', Comment);