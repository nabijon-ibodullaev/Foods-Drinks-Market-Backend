const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
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
  publishDate: {
    type: Date,
  },
  categoryName: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);
exports.Blog = Blog;
exports.BannerSchema = BlogSchema;
