const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    body: String,
    user: {
        type: String,
        index: true
    },    
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('comments', Comment);