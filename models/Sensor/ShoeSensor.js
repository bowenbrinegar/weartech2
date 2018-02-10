const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
  data: [{ type: Schema.Types.ObjectId, ref: 'ShoeData' }],
  createAt: { type: Date, require: true },
  updatedAt: { type: Date, require: true },
  institution: { type: Schema.Types.ObjectId, ref: 'Institution' }
});

module.exports = mongoose.model("ShoeSensor", sensorSchema);