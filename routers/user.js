const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const _ = require("lodash");

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("Exist User");
  }
  user = new User(_.pick(req.body, ["name", "email", "password"]));
  await user.save();
  res.send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
