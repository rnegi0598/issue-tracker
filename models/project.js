const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  issues: [
    {
      type: Object,
    },
  ],
 
});

module.exports = mongoose.model("Project", projectSchema);
