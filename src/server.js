const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const indexRouter = require("./routes/index");
const postRouter = require("./routes/post");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/x-b");

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(expressLayouts);

app.set("layout", path.join(__dirname, "views", "layouts", "layout"));
app.set("layout extractScripts", true);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", indexRouter);
app.use("/post", postRouter);

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
