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
  functionality: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "functionality",
  },
  additionalData: {
    type: Array,
  },
});

module.exports = mongoose.model("requirements", requirementSchema);
