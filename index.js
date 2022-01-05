var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Testando requisição inicial');
});

app.listen(4000);