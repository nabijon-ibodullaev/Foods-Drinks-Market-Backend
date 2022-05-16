const mongoose = require("mongoose");

const FoodCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Include the product name"],
    max: 50,
  },
});

const FoodCategory = mongoose.model("FoodCategory", FoodCategorySchema);
exports.FoodCategory = FoodCategory;
exports.FoodCategorySchema = FoodCategorySchema;
