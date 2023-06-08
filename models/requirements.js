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
  functionality: [{ title: String, requirement: String, description: String }],
  additionalData: {
    type: Array,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("requirements", requirementSchema);
