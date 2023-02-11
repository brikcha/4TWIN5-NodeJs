var express = require('express');
var router = express.Router();
var os = require("os");

router.get('/', function(req, res, next) {
    res.json({
        hostname:os.hostname(),
        type:os.type(),
        platform:os.platform()
    });
  });

router.get('/opus', function(req, res, next) {
    res.json({
        cpus:os.cpus(),
    });
  });

  router.get('/opus/:id', function(req, res, next) {
    res.json({
        cpus:os.cpus()[req.params.id],
    });
  });

module.exports = router;