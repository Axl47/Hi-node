var express = require('express');
var app = express();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const context = {
    title: 'Profile',
    name: 'Jason',
    age: 25,
    position: 'Heladero',
    hobbies: ['estudiar', 'comer helado', 'trabajar vendiendo helado'],
  }
  res.render('profile', context );
});

module.exports = router;
app.use(express.static(__dirname + '/public'));
app.use("/stylesheets",express.static(__dirname + "/stylesheets"));
