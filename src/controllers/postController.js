const asyncHandler = require("express-async-handler");
const Post = require("../models/Post");

exports.index = asyncHandler(async (req, res) => {
  const posts = await Post.find({})
    .sort([["createdAt", -1]])
    .exec();
  res.render("pages/post/index", { title: "Home", posts: posts });
});

exports.create = asyncHandler(async (req, res) => {
  res.render("pages/post/create", {
    title: "New Post",
    scripts: [
      "https://code.jquery.com/jquery-3.5.1.min.js",
      "https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.js",
    ],
  });
});

exports.store = asyncHandler(async (req, res) => {
  Post.create({
    ...req.body,
  }).then((post) => {
    res.render("pages/post/show", { title: post.title, post: post });
  });
});

exports.show = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("pages/post/show", { title: post.title, post: post });
});

exports.destroy = asyncHandler(async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/post/");
});
