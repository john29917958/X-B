const asyncHandler = require("express-async-handler");

exports.signUp = asyncHandler(async (req, res) => {
  res.render("pages/account/signUp", { title: "Sign-up" });
});

exports.store = asyncHandler(async (req, res) => {
  
});
