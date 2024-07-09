const mongoose = require("mongoose");
const parentSchema = new mongoose.Schema({
  parentname: { type: String, required: true },
  password: { type: String, required: true }
}, {
  collection: "parents"
});

module.exports = mongoose.model('Parent', parentSchema);
