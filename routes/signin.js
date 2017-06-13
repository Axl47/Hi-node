var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signin', { title: 'Express' });
});

module.exports = router;
app.use(express.static(__dirname + '/public'));
app.use("/stylesheets",express.static(__dirname + "/stylesheets"));

  //<form action="#">
    //<p>
      //<input name="group1" type="radio" id="test1" />
      //<label for="test1">Cliente</label>
    //</p>
    //<p>
      //<input name="group1" type="radio" id="test2" />
      //<label for="test2">Trabajador</label>
    //</p>
  //</form>

// <input type="date" class="datepicker">

//  <button class="btn waves-effect waves-light" action = 'http://localhost:3000/home' type="submit" name="action">Submit
    //<i class="material-icons right">send</i>
  //</button>
