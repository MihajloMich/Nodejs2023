const blogpost = require("../models/blogpost");

const create = async (req, res) => {
  try {
    let data = {
      ...req.body,
      publish_date: new Date(),
    };
    await blogpost.create(data);
    res.redirect("./.");
    return res.rednder("form_edit_post", { data });
  } catch (err) {
    console.log(err);
    return req.status(500).send("Internal Server Error");
  }
};

const update = async (req, res) => {
  try {
    let data = {
      ...req.body,
    };
    await blogpost.updateOne(req.params.id, data);
    res.redirect("./.");
    return res.rednder("form_edit_post", { data });
  } catch (err) {
    console.log(err);
    return req.status(500).send("Internal Server Error");
  }
};

const remove = (req, res) => {
  res.send("Implement Remove"); // TO DO za domasna
};

module.exports = {
  create,
  update,
  remove,
};
