const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String
});
Account.associate = function(models) {
    Account.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
