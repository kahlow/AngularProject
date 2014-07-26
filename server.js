var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});

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

    res.end(JSON.stringify(movies));
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');