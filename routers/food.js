const express = require("express");
const router = express.Router();
const { Food } = require("../models/foods");
const auth = require("../middleware/auth");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const upload = multer({ storage: storage });

// ************************GET ALL ********************************
router.get("/", async (req, res) => {
  const foods = await Food.find();
  if (!foods) {
    return res.status(404).send("Foods Empty");
  }
  res.send(foods);
});

// ********************** TOTAL SUM ********************************

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

// *************************** GET FRUITS ONLY******************
router.get("/fruits", async (req, res) => {
  let fruits = await Food.find({ categoryName: "Fruits" });
  if (!fruits) {
    res.send("Fruits empty");
  }
  res.send(fruits);
});

// ******************* GET VEGETABLES ONLY********************

router.get("/vegetables", async (req, res) => {
  let vegetables = await Food.find({ categoryName: "Vegetables" });
  if (!vegetables) {
    res.send("vegetables empty");
  }
  res.send(vegetables);
});
// ******************* GET Meat and poultry ONLY********************

router.get("/meat-and-poultry", async (req, res) => {
  let meat = await Food.find({
    categoryName: "Meat and poultry",
  });
  if (!meat) {
    res.json({ message: "meat empty" });
  }
  res.send(meat);
});

// ******************* GET GRAINS ONLY********************

router.get("/grains", async (req, res) => {
  let grains = await Food.find({
    categoryName: "Grains, legumes, nuts and seeds",
  });
  if (!grains) {
    res.send("grains empty");
  }
  res.send(grains);
});
// ******************* GET Fish and seafood ONLY********************

router.get("/fish-and-seafood", async (req, res) => {
  let fish = await Food.find({
    categoryName: "Fish and seafood",
  });
  if (!fish) {
    res.send("Fish and seafood empty");
  }
  res.send(fish);
});
// ******************* GET Eggs ONLY********************

router.get("/eggs", async (req, res) => {
  let Eggs = await Food.find({
    categoryName: "Eggs",
  });
  if (!Eggs) {
    res.send("Eggs empty");
  }
  res.send(Eggs);
});
// ******************* GET Dairy Foods ONLY********************

router.get("/dairy-foods", async (req, res) => {
  let dairy = await Food.find({
    categoryName: "Dairy Foods",
  });
  if (!dairy) {
    res.send("Dairy Foods empty");
  }
  res.send(dairy);
});
// ******************* GET Alcoholic drinks ONLY********************

router.get("/alcoholic-drinks", async (req, res) => {
  let alcoholic = await Food.find({
    categoryName: "Alcoholic drinks",
  });
  if (!alcoholic) {
    res.send("Alcoholic drinks empty");
  }
  res.send(alcoholic);
});
// ******************* GET Non-alcoholic drinks ONLY********************

router.get("/non-alcoholic-drinks", async (req, res) => {
  let nonAlcoholic = await Food.find({
    categoryName: "Non-alcoholic drinks",
  });
  if (!nonAlcoholic) {
    res.send("Non-alcoholic drinks drinks empty");
  }
  res.send(nonAlcoholic);
});

// ******************* GET Hot drinks ONLY********************

router.get("/hot-drinks", async (req, res) => {
  let hotDrinks = await Food.find({
    categoryName: "Hot drinks",
  });
  if (!hotDrinks) {
    res.send("Hot drinks drinks empty");
  }
  res.send(hotDrinks);
});

// ******************* GET Juice and plant drinks ONLY********************

router.get("/juice-and-plant-drinks", async (req, res) => {
  let juice = await Food.find({
    categoryName: "Juice and plant drinks",
  });
  if (!juice) {
    res.send("Juice and plant drinks empty");
  }
  res.send(juice);
});

// *****************GET PRODUCT NUMBERS****************************

router.get("/count", async (req, res) => {
  const products = await Food.find();
  res.send(products);
});

// *****************GET SORT BY DATE****************************

router.get("/date", async (req, res) => {
  const products = await Food.find().sort({ createdDate: 1 });
  res.send(products);
});

// ? **********************NEW PRODUCT**********************************

router.post("/", upload.single("productImage"), async (req, res) => {
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

// *******************GET BY ID ******************************

router.get("/:id", async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    return res.status(404).send("That type of id not found");
  }
  res.send(food);
});

// ? ****************** UPDATE FOOD *****************************

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

// ! ******************DELETE FOOD***************************

router.delete("/:id", async (req, res) => {
  const food = await Food.findByIdAndRemove(req.params.id);
  if (!food) {
    return res.status(404).send("That type of id not found...");
  }
  res.send(food);
});

module.exports = router;
