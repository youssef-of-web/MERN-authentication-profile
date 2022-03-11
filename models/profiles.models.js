const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProfile = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    tel: "string",
    city: "string",
    country: "string",
    postalcode: "string",
    bio: "string",
    address: "string",
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("profiles", UserProfile);
