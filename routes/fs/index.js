const router = require("express").Router();
const tempRoutes = require("./tempAPI");

router.use("/fs", tempRoutes);

module.exports = router;