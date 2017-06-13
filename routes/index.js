var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
app.use(express.static(__dirname + '/public'));
app.use("/stylesheets",express.static(__dirname + "/stylesheets"));


  //<form action="#">
    //<p>
      //<input name="group1" type="radio" id="test1" />
      //<label for="test1">Red</label>
    //</p>
    //<p>
      //<input name="group1" type="radio" id="test2" />
      //<label for="test2">Yellow</label>
    //</p>
    //<p>
      //<input class="with-gap" name="group1" type="radio" id="test3"  />
      //<label for="test3">Green</label>
    //</p>
    //<p>
      //<input name="group1" type="radio" id="test4" disabled="disabled" />
      //<label for="test4">Brown</label>
    //</p>
  //</form>

// <input type="date" class="datepicker">

//  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    //<i class="material-icons right">send</i>
  //</button>
