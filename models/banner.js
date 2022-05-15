const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  title: {
    type: String,
    max: 60,
  },
  description: {
    type: String,
    max: 80,
  },
  imageUrl: {
    type: String,
  },
});

const Banner = mongoose.model("Banner", BannerSchema);
exports.Banner = Banner;
exports.BannerSchema = BannerSchema;
