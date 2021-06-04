const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;

Post.create({
    title: 'Post1 Title',
    detail: 'This is the first post',
});


Post.create({
    title: 'Post2 Title',
    detail: 'This is the second post',
});

Post.create({
    title: 'Post3 Title',
    detail: 'This is the third post',
});