const mongoose = require("mongoose");
const Joi = require("joi");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
});
function ValidateCategory(category) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
  };
  return Joi.validate(category, schema);
}
const Category = mongoose.model("Category", CategorySchema);

exports.Category = Category;
exports.validate = ValidateCategory;
