const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requirementSchema = new Schema({
  role: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  list: {
    type: String,
  },
  content: {
    type: String,
  },
});

const Requirement = mongoose.model("requirements", requirementSchema);

module.exports = Requirement;
