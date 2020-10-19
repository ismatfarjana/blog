const Post = require("../models/post_model");

// create
const newPost = function(req) {
  const title = req.body.title;
  const author = req.body.author;
  const authorId = req.body.authorId;
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  const newPost = new Post({
    title,
    author,
    authorId,
    description,
    date
  });

  return newPost.save();
};

//read
const allPosts = function(req) {
  return Post.find();
};

// read one post
const onePostById = function(id) {
  return Post.findById(id);
};

// update
const updateOnePostById = function(id) {
  return Post.findByIdAndUpdate(id);
};

// delete

module.exports = {
  newPost,
  allPosts,
  onePostById,
  updateOnePostById
};
