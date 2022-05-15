const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
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
  imageUrl: {
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
  categoryName: {
    type: [String],
  },
});

const Drink = mongoose.model("Drink", drinkSchema);
exports.Drink = Drink;
exports.drinkSchema = drinkSchema;
