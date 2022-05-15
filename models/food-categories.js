const mongoose = require("mongoose");

const FoodCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 50,
  },
});

const FoodCategory = mongoose.model("FoodCategory", FoodCategorySchema);
exports.FoodCategory = FoodCategory;
exports.FoodCategorySchema = FoodCategorySchema;
