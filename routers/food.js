const express = require("express");
const router = express.Router();
const { Food } = require("../models/foods");

router.get("/", async (req, res) => {
  const foods = await Food.find();
  if (!foods) {
    return res.status(404).send("Foods Empty");
  }
  res.send(foods);
});

module.exports = router;
