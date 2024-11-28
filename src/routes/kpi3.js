var express = require("express");
var router = express.Router();

var kpi3Controller = require("../controllers/kpi3Controller");

router.get("/listarSEG", function (req, res) {
    kpi3Controller.listarSEG(req, res);
});

module.exports = router;