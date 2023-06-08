const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const functionalitySchema = new Schema({
  title: {
    type: String,
  },
  requirement: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("functionality", functionalitySchema);
