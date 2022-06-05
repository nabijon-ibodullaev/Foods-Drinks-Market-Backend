const { User } = require("../models/user");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const _ = require("lodash");

router.post("/", async (req, res) => {
  let fetchUser;
  let user = await User.findOne({
    email: req.body.email,
  });
  if (!user)
    return res.status(401).json({
      message: "Auth Failed",
    });

  fetchUser = user;
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isValidPassword)
    return res.status(400).send("Email or password invalid");

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send(true);

  res.status(200).send({ token });
});

module.exports = router;
