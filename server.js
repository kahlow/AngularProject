var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/movies', function(req, res){
    var movies = [{
            id: 1,
            title: 'Terminator 2: Judgment Day',
            description: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John, from a more advanced cyborg, made out of liquid metal.',
            director: 'James Cameron',
            releaseYear: '1991'
        },
        {
            id: 2,
            title: 'Big Trouble in Little China',
            description: 'An All-American trucker gets dragged into a centuries-old mystical battle in Chinatown.',
            director: 'John Carpenter',
            releaseYear: '1986'
        },
        {
            id: 3,
            title: 'The Evil Dead',
            description: 'Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.',
            director: 'Sam Raimi',
            releaseYear: '1981'
        }];
    res.json(movies);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});