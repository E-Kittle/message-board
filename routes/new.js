var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Mini Messageboard', data: messages });
});

module.exports = router;


// I don't think I do it this way