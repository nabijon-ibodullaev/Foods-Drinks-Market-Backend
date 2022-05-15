const express = require("express");
const mongoose = require("mongoose");
const app = express();
const categories = require("./routers/categories");
const banner = require("./routers/banner");
const foodCategories = require("./routers/foods-category");
const drinkCategories = require("./routers/drinks-category");
const foods = require("./routers/food");
const drinks = require("./routers/drink");

// ********** mongodb connection ************//
mongoose
  .connect("mongodb://localhost:27017/food_drinks_market")
  .then(() => {
    console.log("MongoDB is connected....");
  })
  .catch((error) => console.log(`Connection Error..., ${error}`));

// ********** MIDDLEWARE *********//
app.use(express.json());
app.use("/api/categories", categories);
app.use("/api/banner", banner);
app.use("/api/food-categories", foodCategories);
app.use("/api/drink-categories", drinkCategories);
app.use("/api/foods", foods);
app.use("/api/drinks", drinks);

//************* PORT ********************* */
const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log(`App listening - ${port}`);
});
