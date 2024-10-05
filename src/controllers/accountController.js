const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signIn = asyncHandler(async (req, res) => {
  res.render("pages/account/signIn", { title: "Sign-in" });
});

exports.auth = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username })
    .exec()
    .then(
      (user) => {
        if (user) {
          bcrypt.compare(password, user.password, (error, isSame) => {
            if (isSame) {
              req.session.userId = user._id;
              res.redirect("/");
            } else {
              // TODO: Implement password validation error function
            }
          });
        }
      },
      (error) => {}
    );
});

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
