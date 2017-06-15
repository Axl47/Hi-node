var express = require('express');
var app = express();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Order', {title: 'Express'});
});

module.exports = router;

app.use(express.static(__dirname + '/public'));
app.use("/stylesheets",express.static(__dirname + "/stylesheets"));
