const asyncHandler = require("express-async-handler");
const Post = require("../models/Post");

exports.index = asyncHandler(async (req, res) => {
  const posts = await Post.find({})
    .sort([["createdAt", -1]])
    .exec();
  res.render("pages/post/index", { title: "Home", posts: posts });
});

exports.create = asyncHandler(async (req, res) => {
  res.render("pages/post/create", { title: "New Post" });
});

exports.show = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("pages/post/show", { title: post.title, post: post });
});

exports.store = asyncHandler(async (req, res) => {
  Post.create({
    ...req.body,
  }).then((post) => {
    res.render("pages/post/show", { title: post.title, post: post });
  });
});
