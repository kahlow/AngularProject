var express = require('express');
var app = express();

app.use(express.static(__dirname + '/')).use(express.json());

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

app.get('/movies', function(req, res){
    res.json(movies);
});

app.put('/movies/:movieId', function(req, res){
    var id = req.params.movieId;

    var index = -1;

    for(var i = 0; i < movies.length; i++) {
        if (movies[i].id === req.body.id) {
            index = i;
            break;
        }
    }

    movies[index] = req.body;

    res.send(id);
});

app.patch('/movies/:movieId', function(req, res){
    var id = req.params.movieId;

    res.send(id);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});