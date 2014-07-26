var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/movies', function(req, res){
    var movies = [{
             name: 'Terminator 2',
            description: 'He\'s back.'
        },
        {
            name: 'Big Trouble in Little China',
            description: 'Don\'t mess with Jack Burton'
        },
        {
            name: 'Evil Dead',
            description: 'Boomstick'
        }];
    res.json(movies);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});