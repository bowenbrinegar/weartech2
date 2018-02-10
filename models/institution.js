const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const institutionSchema = new Schema({
  institution: { type: String, required: true },
  size: { type: Number, required: true },
  createAt: { type: Date, require: true },
  updatedAt: { type: Date, require: true },
  cushion: [{ type: Schema.Types.ObjectId, ref: 'CushionSensor' }],
  shoe: [{ type: Schema.Types.ObjectId, ref: 'ShoeSensor' }],
  bed: [{ type: Schema.Types.ObjectId, ref: 'BedSensor' }]
});

module.exports = mongoose.model("Institution", institutionSchema);

