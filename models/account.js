const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    following: [{
      type: Schema.Types.ObjectId,
      ref: "accounts"
    }],
    followed: [{
      type: Schema.Types.ObjectId,
      ref: "accounts"
    }],
    posts: [{
      type: Schema.Types.ObjectId,
      ref: "post"
    }]
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
