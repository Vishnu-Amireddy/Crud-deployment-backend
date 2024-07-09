const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  studentname: { type: String, required: true },
  password: { type: String, required: true }
}, {
  collection: "students"
});




module.exports = mongoose.model('Student', studentSchema);
