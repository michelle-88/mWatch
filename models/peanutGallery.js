const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeanutGallery = new Schema({
    imdbID: {
        type: String,
        unique: true
    },
    tmdbId: Number,
    title: String,
    posterURL: String,
    plot: String,
    actors: String,
    genre: String,
    rated: String,
    released: String,
    writer: String,
    rating: Number,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comments'
        }
    ]

},{collection: 'peanutGallery'});

module.exports = mongoose.model('peanutGallery', PeanutGallery);