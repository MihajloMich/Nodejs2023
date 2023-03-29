const blogpost = require("../models/blogpost");

const main = async (req, res) => {
  try {
    let data = await blogpost.getAll();
    return res.render("main", { data });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const formAdd = async (req, res) => {
  try {
    return res.render("form add post");
  } catch (err) {
    console.log(err);
    return req.status(500).send("Internal Server Error");
  }
};

const formEdit = async (req, res) => {
  try {
    let data = await blogpost.getOne(req.params.id);
    return res.rednder("form_edit_post", { data });
  } catch (err) {
    console.log(err);
    return req.status(500).send("Internal Server Error");
  }
};

module.exports = {
  main,
  formAdd,
  formEdit,
};
