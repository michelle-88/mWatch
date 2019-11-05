const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    watchList: [{
        id: Number,
        name: String,
        poster: String,
        summary: String
    }]
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
