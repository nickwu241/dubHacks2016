var io = require('socket.io').listen(80); // initiate socket.io server

io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' }); // Send data to client

    // wait for the event raised by the client
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

/*
var Yelp = require('yelp');

var yelp = new Yelp({
    consumer_key: 'DPu3vNKRt8E1cQFS5Laqnw',
    consumer_secret: 'tCmmb2bxHuhxzMAKeBVkYyIa_EA',
    token: '28uH66uaBAw1TAt33aRHaUUNpob8MTRv',
    token_secret: '0Jusy-1NBOsl-QYrpXCM61am_3c',
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'food', location: 'Montreal' })
    .then(function (data) {
        console.log(data);
    })
    .then(function () {
        console.log("sup");
        return 7;
    })
    .then(function (num) {
        console.log(num); // 7
        return yelp.business("yelp-san-francisco");
    })
    .then(function (data) {
        console.log("data for san fran:", data);
    })
    .catch(function (err) {
        console.error(err);
    });

 // Promise.all(promises
// // chess)

// See http://www.yelp.com/developers/documentation/v2/business

yelp.business('yelp-san-francisco')
    .then(console.log)
    .catch(console.error);
*/