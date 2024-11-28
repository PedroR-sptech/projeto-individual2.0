var express = require("express");
var router = express.Router();

var kpi2Controller = require("../controllers/kpi2Controller");

router.get("/listarMAX", function (req, res) {
    kpi2Controller.listarMAX(req, res);
});

module.exports = router;