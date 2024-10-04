const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
  },
  body: {
    type: String,
    required: [true, "Please provide post body."],
  },
  createdAt: {
    type: Date,
    required: [true],
    default: new Date(),
  },
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
