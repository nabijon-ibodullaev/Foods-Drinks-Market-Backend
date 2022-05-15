const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    max: 1024,
  },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
