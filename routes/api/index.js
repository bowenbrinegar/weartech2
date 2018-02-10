const router = require("express").Router();
const dbRoutes = require("./dbapi");

router.use("/db", dbRoutes);

module.exports = router;