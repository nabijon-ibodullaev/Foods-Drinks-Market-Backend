const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("MongoDB is connected....");
  })
  .catch((error) => console.log(`Connection Error..., ${error}`));

app.get("/api/course", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT | 3000;

app.listen(port, () => {
  console.log(`App listening - ${port}`);
});
