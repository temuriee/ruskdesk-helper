const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true, //
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Group", groupSchema);
