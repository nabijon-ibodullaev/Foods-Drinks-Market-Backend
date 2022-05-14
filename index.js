const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb://localhost:27017",
  () => {
    console.log("mongodb is connected...");
  },
  (err) => {
    console.log(`Connection error ${err}`);
  }
);

app.get("/api/course", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT | 3000;

app.listen(port, () => {
  console.log(`App listening - ${port}`);
});
