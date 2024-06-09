const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  address1: { type: String, required: true },
  address2: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
