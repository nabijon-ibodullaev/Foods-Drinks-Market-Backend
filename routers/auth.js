const { User } = require("../models/user");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const _ = require("lodash");

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or password invalid");

  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isValidPassword)
    return res.status(400).send("Email or password invalid");

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send(true);
});

module.exports = router;
