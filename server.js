var express  = require('express');
var app      = express();
app.use(express.static(__dirname));

app.use('*', function (req, res, next) {
    if (req.accepts('html')) res.sendFile(__dirname + '/index.html');
    else next()
});

app.listen(3016);
console.log("App listening on port 3016");