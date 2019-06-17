var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//route for homepage 
app.get('/', sessionChecker, (req, res) => {
  res.redirect('/login'); 
}); 

//

//route for user signup 
app.route 
module.exports = router;
