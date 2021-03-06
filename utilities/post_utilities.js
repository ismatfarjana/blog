const Post = require("../models/post_model");

// create
const newPost = function(req) {
  const title = req.body.title;
  const author = req.user.name;
  const authorId = req.user._id;
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
  return Post.find().lean();
};

// read one post
const onePostById = function(id) {
  return Post.findById(id).lean();
};

// update
const updateOnePostById = function(id) {
  return Post.findByIdAndUpdate(id).lean();
};

//one posts of user
const getUsersAllPosts = userId => {
  return Post.find({ authorId: userId }).lean();
};

// delete
const deleteOnePost = id => {
  return PostModel.findByIdAndDelete(id).lean();
};

module.exports = {
  newPost,
  allPosts,
  onePostById,
  updateOnePostById,
  getUsersAllPosts,
  deleteOnePost
};
