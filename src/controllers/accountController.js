const asyncHandler = require("express-async-handler");
const User = require("../models/User");

exports.signIn = asyncHandler(async (req, res) => {
  res.render("pages/account/signIn", { title: "Sign-in" });
});

exports.auth = asyncHandler(async (req, res) => {});

exports.signUp = asyncHandler(async (req, res) => {
  res.render("pages/account/signUp", { title: "Sign-up" });
});

exports.store = asyncHandler(async (req, res) => {
  User.create({
    ...req.body,
    createdAt: new Date(),
  }).then(
    (user) => {
      res.redirect("/");
    },
    (error) => {
      console.error("Failed to create user", error);
      res.redirect("/account/sign-up");
    }
  );
});
