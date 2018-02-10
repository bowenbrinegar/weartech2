const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  health: { type: Number, required: true },
  connectionStrength: { type: Number, required: true },
  compressionTime: { type: Number, required: true },
  compressionAmount: { type: Number, required: true },
  springRate: { type: Number, required: true },
  createAt: { type: Date, require: true },
  sensor: { type: Schema.Types.ObjectId, ref: 'BedSensor' }
});

module.exports = mongoose.model("BedData", dataSchema);