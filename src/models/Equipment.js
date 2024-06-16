const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  equipmentId: String,
  timestamp: String,
  value: Number
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;