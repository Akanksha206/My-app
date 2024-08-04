const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  name: { type: String, required: true, minlength: 20, maxlength: 60 },
  email: { type: String, required: true },
  address: { type: String, maxlength: 400 },
  rating: { type: Number, min: 1, max: 5 }
});

module.exports = mongoose.model('Store', storeSchema);
