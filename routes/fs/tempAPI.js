const router = require("express").Router();
const path = require('path')

router.route('/findFirstCushionSensor')
  .get(function(req, res) {
    res.sendFile(path.join(__dirname, "../../cvsFiles/findFirstCushionSensor.json"));
  });