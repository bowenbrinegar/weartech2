const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  health: { type: Number, required: true },
  connectionStrength: { type: Number, required: true },
  steps: { type: Number, required: true },
  pressure: { type: Number, required: true },
  distance: { type: Number, required: true },
  createAt: { type: Date, require: true },
  sensor: { type: Schema.Types.ObjectId, ref: 'ShoeSensor' }
});

module.exports = mongoose.model("ShoeData", dataSchema);