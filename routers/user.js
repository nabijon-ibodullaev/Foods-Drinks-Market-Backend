const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// Get Profile
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

// Get All Users
router.get("/", async (req, res) => {
  const user = await User.find().sort("regDate");
  if (!user) {
    return res.status(404).send("Users does not exist");
  }
  res.send(user);
});
// New User
router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("Exist User");
  }
  user = new User(
    _.pick(req.body, ["name", "email", "password", "isAdmin", "regDate"])
  );
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
  await user.save().then((result) => {
    res.status(201).json({
      message: "User Created!",
      result: result,
    });
  });
  res.send(_.pick(user, ["_id", "name", "email", "isAdmin"]));
});

module.exports = router;
