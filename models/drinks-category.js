const mongoose = require("mongoose");

const DrinkCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 50,
  },
});

const DrinkCategory = mongoose.model("DrinkCategory", DrinkCategorySchema);
exports.DrinkCategory = DrinkCategory;
exports.DrinkCategorySchema = DrinkCategorySchema;