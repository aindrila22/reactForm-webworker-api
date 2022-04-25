const { default: mongoose } = require("mongoose");
const express = require("mongoose");

const formSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  topic: {
    type: String,
  },
  review: {
    type: String,
  },
});

module.exports = mongoose.model("Form", formSchema);
