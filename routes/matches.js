var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/', function(req, res, next) { 
    res.render('matches'); 
});
router.post('/create', function(req, res, next) {
  
  const matchesDetails=req.body;
 
  var sql = 'INSERT INTO matches SET ?';
  db.query(sql, matchesDetails,function (err, data) { 
      if (err) throw err;
         console.log("matches dat is inserted successfully "); 
  });
 res.redirect('matches/'); 
}); 
module.exports = router;