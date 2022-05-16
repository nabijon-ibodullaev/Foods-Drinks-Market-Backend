const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 2,
    max: 50,
    required: [true, "Please Include the product name"],
  },
  description: {
    type: String,
    min: 5,
    max: 50,
    required: [true, "Please Include the product description"],
  },
  imageUrl: {
    type: String,
    required: [true, "Please Include the product imageUrl"],
  },
  price: {
    type: Number,
    max: 255,
  },
  rating: {
    type: Number,
  },
  categoryName: {
    type: [String],
  },
});

const Food = mongoose.model("Food", foodSchema);
exports.Food = Food;
exports.foodSchema = foodSchema;
