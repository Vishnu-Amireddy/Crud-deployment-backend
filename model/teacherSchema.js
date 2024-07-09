const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
  teachername: { type: String, required: true },
  password: { type: String, required: true }
}, {
  collection: "teachers"
});

module.exports = mongoose.model('Teacher', teacherSchema);
