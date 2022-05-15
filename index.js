const express = require("express");
const mongoose = require("mongoose");
const app = express();
const categories = require("./routers/categories");
const foods = require("./routers/food");

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
app.use("/api/foods", foods);

//************* PORT ********************* */
const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log(`App listening - ${port}`);
});
