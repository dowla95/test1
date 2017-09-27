var http = require('https');
var querystring = require ('querystring');

exports.Script = function (req, res) {
	res.render( 'Script', { title: 'Express'});
};

exports.index = function (req, res) {
	var paymentToken = generateCheckoutId { function(result) {
	if ( result != null && result !=undefined )
		res.render('index', {checkoutId: result.id });
	else 
		res.render('index', 'none');
	};
};

function generateCheckoutId (callback) {
	var path='/v1/checkouts';
	var data = querystring.stringify( {
		'authentication.userId' : '8a8294184f45ce7e014f4b1d16cc12df',
		'authentication.password' : 'j3zCJ2ENaD',
		'authentication.entityId' : '8a8294184f45ce7e014f4b1d16bd12db',
		'amount' : '92.00',
		'currency' : 'RSD',
		'paymentType' : 'DB'
	});
	var options = {
		port: 443,
		host: 'test.oppwa.com',
		path: path,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': data.length
		}
	};
	var postRequest = http.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			jsonRes = JSON.parse(chunk);
			return callback(jsonRes);
		});
	});
	postRequest.write(data);
	postRequest.end();
}

exports.index = function (req, res) {
	var paymentResult = generatedResult {req.query.resourcePath function ( result ) {
	if ( result != null && result !=undefined )
		res.render('result', {message: result.result.description});
	else 
		res.render('result', 'none')
	};
};


function generateResultpath, callback) {
	return callback(null);
}