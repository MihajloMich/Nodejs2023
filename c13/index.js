const express = require("express");
const mongoose = require("mongoose");
const pages = require("./handler/pages");
const callback = require("./handler/callback");

const dsn =
  "mongodb+srv://MihajloDimov:MihajloDimov56@cluster0.nl3n2bg.mongodb.net/Blogpost?retryWrites=true&w=majority";

mongoose.connect(dsn);

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", pages.main);
app.get("/form_add_post", pages.formAdd);
app.get("/form_edit_post", pages.forEdit);

app.get("/", pages.main);
app.post("/post/add", callback.create);
app.post("/post/edit/:id", callback.update);
app.delete("/post/delet/:id", callback.remove);

app.listen;
