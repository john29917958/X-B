const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  createdAt: {
    type: Date,
    required: [true, "Creation time is required."],
    default: new Date(),
  },
});

UserSchema.plugin(uniqueValidator);
UserSchema.pre("save", handleEncryptUserPassword);

const User = mongoose.model("User", UserSchema);
module.exports = User;

function handleEncryptUserPassword(next) {
  const user = this;
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
}
