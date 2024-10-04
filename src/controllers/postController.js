const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res) => {
  res.render("pages/post/index", { title: "Home" });
});

exports.create = asyncHandler(async (req, res) => {
  res.render("pages/post/create", { title: "New Post" });
});
