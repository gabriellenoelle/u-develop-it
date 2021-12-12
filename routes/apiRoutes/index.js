const apiRoutes = require("./routes/apiRoutes");
const express = require("express");
const router = express.Router();
app.use("/api", apiRoutes);
router.use(require("./partyRoutes"));

router.use(require("./candidateRoutes"));

module.exports = router;
