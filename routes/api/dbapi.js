const router = require("express").Router();
const dbController = require("../../controllers/db-controller.js")

router.route('/clear')
  .get(dbController.clear);

router.route("/institution")
  .get(dbController.findAllInstitution)
  .post(dbController.createInstitution);

router.route("/institution/:institution")
  .get(dbController.findInstitutionByID)

router.route('/cushion')
  .get(dbController.findAllCushionSensor)
  .post(dbController.createCushion);

router.route('/cushion/one')
  .get(dbController.findOneCushionSensor);

router.route('/shoe')
  .get(dbController.findAllShoeSensor)
  .post(dbController.createShoe);

router.route('/bed')
  .get(dbController.findAllBedSensor)
  .post(dbController.createBed);

router.route('/data/bed')
  .get(dbController.findAllBedData)
  .post(dbController.createBedData);

router.route('/data/shoe')
  .get(dbController.findAllShoeData)
  .post(dbController.createShoeData);

router.route('/data/cushion')
  .get(dbController.findAllCushionData)
  .post(dbController.createCushionData);

module.exports = router;