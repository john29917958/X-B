const asyncHandler = require("express-async-handler");

exports.signIn = asyncHandler(async (req, res) => {
  res.render("pages/account/signIn", { title: "Sign-in" });
});

exports.auth = asyncHandler(async (req, res) => {});

exports.signUp = asyncHandler(async (req, res) => {
  res.render("pages/account/signUp", { title: "Sign-up" });
});

exports.store = asyncHandler(async (req, res) => {
  
});
