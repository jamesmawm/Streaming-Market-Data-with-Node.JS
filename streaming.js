// Use the OAuth module
var OAuth = require('oauth').OAuth;
var xml2js = require('xml2js');

console.log("Hello world");

var credentials = {
	/* Replace your own keys here */
    consumer_key: "CONSUMER_KEY",
    consumer_secret: "CONSUMER_SECRET",
    access_token: "ACCESS_TOKEN",
    access_secret: "ACCESS_SECRET"
};

var oa = new OAuth(null, null, credentials.consumer_key, credentials.consumer_secret, "1.0", null, "HMAC-SHA1");

console.log("auth...");

var request = oa.get(
	"https://stream.tradeking.com/v1/market/quotes?symbols=AAPL"
	, credentials.access_token
	, credentials.access_secret);
console.log("Good!");
request.on('response', function (response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
        console.log(data);
    })
});
request.end();