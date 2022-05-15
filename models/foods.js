const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 2,
    max: 50,
    required: true,
  },
  description: {
    type: String,
    min: 5,
    max: 50,
    required: true,
  },
  image_Url: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    max: 255,
  },
  rating: {
    type: Number,
  },
  category_name: {
    type: [String],
  },
});

const Food = mongoose.model("Food", foodSchema);
exports.Food = Food;
exports.foodSchema = foodSchema;
