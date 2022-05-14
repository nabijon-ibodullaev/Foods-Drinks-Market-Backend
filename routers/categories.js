const express = require("express");
const router = express.Router();
const { Category, validate } = require("../models/categories");

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});

module.exports = router;
