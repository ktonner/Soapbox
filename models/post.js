const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    text: String,
    date: { type: Date, default: Date.now },
    tags: {type: Array}
});


module.exports = mongoose.model('post', Post);