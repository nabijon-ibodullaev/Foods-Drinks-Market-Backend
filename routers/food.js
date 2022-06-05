const express = require("express");
const router = express.Router();
const { Food } = require("../models/foods");
const auth = require("../middleware/auth");
router.get("/", async (req, res) => {
  const foods = await Food.find();
  if (!foods) {
    return res.status(404).send("Foods Empty");
  }
  res.send(foods);
});

// ! Sum of Foods

router.get("/budget", async (req, res) => {
  const Sum = await Food.find();
  let sum = 0;
  let TotalSum = await Food.aggregate([
    {
      $group: {
        _id: null,
        TotalAmount: {
          $sum: "$price",
        },
      },
    },
  ]);
  if (!Sum) {
    return res.status(404).send("Foods Empty");
  }
  res.send(TotalSum);
});

router.post("/", async (req, res) => {
  let food = new Food({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    rating: req.body.rating,
    categoryName: req.body.categoryName,
    newBadge: req.body.newBadge,
    saleBadge: req.body.saleBadge,
    oldPrice: req.body.oldPrice,
    newPrice: req.body.newPrice,
    qtyTotal: req.body.qtyTotal,
    total: req.body.total,
  });
  food = await food.save();

  res.status(201).send(food);
});

router.get("/count", async (req, res) => {
  const products = await Food.find();
  res.send(products);
});
router.get("/:id", async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    return res.status(404).send("That type of id not found");
  }
  res.send(food);
});

router.put("/:id", async (req, res) => {
  const food = await Food.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      rating: req.body.rating,
      categoryName: req.body.categoryName,
      newBadge: req.body.newBadge,
      saleBadge: req.body.saleBadge,
      oldPrice: req.body.oldPrice,
      newPrice: req.body.newPrice,
      qtyTotal: req.body.qtyTotal,
      total: req.body.total,
    },
    {
      new: true,
    }
  );
  if (!food) {
    return res.status(404).send("That type of id not found");
  }

  res.status(201).send(food);
});

router.delete("/:id", async (req, res) => {
  const food = await Food.findByIdAndRemove(req.params.id);
  if (!food) {
    return res.status(404).send("That type of id not found...");
  }
  res.send(food);
});

module.exports = router;
