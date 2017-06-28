var express = require('express');
var open = require('open');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world!');
});
 
app.listen(process.env.PORT || 5000, function(err){
    if (err) {
    log(err);
    return;
  }
  open(`http://localhost:5000/`);
  console.log('🚧  App is listening at port 5000');
});
 
module.exports = app;