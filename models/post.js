const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    text: String,
    date: { type: Date, default: Date.now },
    tags: {type: Array}
});
Post.associate = function(models) {
    Post.belongsTo(models.Account, {
      foreignKey: {
        allowNull: false
      }
    });
  };

module.exports = mongoose.model('posts', Post);