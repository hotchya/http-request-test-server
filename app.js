const express = require('express');
const app = express();
const port = 3000;

// Using body-parser in express
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));

// Http request handler
app.get('/', function(req, res){
    res.send(req.headers.id);
    console.log(req.headers.id);
});

app.post('/', function(req, res){
    res.send(req.body.id);
    console.log(req.body.id);
});

// Run server
app.listen(port, function () {
    console.log('Example app listening on port : ' + port);
});