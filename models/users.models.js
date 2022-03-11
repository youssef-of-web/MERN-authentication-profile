const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema(
  {
    name: "string",
    email: {
      type: "string",
      trim: true,
      unique: true,
    },
    password: "string",
    role: "string",
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserModel);
