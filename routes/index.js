var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var con = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'item'
});

router.get('/item', function(req, res, next) {
  con.query('SELECT * FROM qiansan', function(err, rows, fields) {
    res.header("Access-Control-Allow-Origin", "*")
    res.send(rows)
  });
});

router.post('/add', function(req, res, next) {
  var a=req.body.a
  var b=req.body.b
  con.query('INSERT INTO qiansan (title,price) VALUES ("'+a+'","'+b+'")', function(err, rows, fields) {
    res.header("Access-Control-Allow-Origin", "*")
    res.send(rows)
  });
});



module.exports = router;
