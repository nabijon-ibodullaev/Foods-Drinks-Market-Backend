const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
});

const Category = mongoose.model("Category", CategorySchema);
exports.Category = Category;
exports.CategorySchema = CategorySchema;
