//Set up requirements
var express = require("express");
var Request = require('request');
var bodyParser = require('body-parser');
var _ = require('underscore');

//Create an 'express' object
var app = express();

//Set up the views directory
app.set("views", __dirname + '/views');
//Set EJS as templating language WITH html as an extension
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//Add connection to the public folder for css & js files
app.use(express.static(__dirname + '/public'));

// Enable json body parsing of application/json
app.use(bodyParser.json());

/*---------------
//DATABASE CONFIG
----------------*/
var cloudant_USER = 'f70046b4-e062-493b-82d8-465eefa679cc-bluemix';
var cloudant_DB = 'mashups';
var cloudant_KEY = 'ngstrestownevereverbeene';
var cloudant_PASSWORD = '249eeed59d016c01e7cafa0c5fd56e14ecf87ab8';

var cloudant_URL = "https://" + cloudant_USER + ".cloudant.com/" + cloudant_DB;


app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next();
});


/*-----
ROUTES
-----*/

//Main Page Route - Show ALL data VIEW
app.get("/", function(req, res){
	res.render('index', {page: 'get all data'});
});

//Main Page Route - Show SINGLE word VIEW
app.get("/:word", function(req, res){
	var currentWord = req.params.word;
	res.render('index', {page: currentWord});
});

//Step three: the data is in the server now
//SAVE an object to the db
app.post("/save", function(req,res){		//req is request
	// console.log("A POST!!!!");  	//happens in your terminal
	//Get the data from the body
	var data = req.body;		//it's the data that we made in javascript, the data now is in the body
	// console.log(data);
	//Send the data to the db
	Request.post({				//now the server is posting to the cloudant database
		url: cloudant_URL,
		auth: {
			user: cloudant_KEY,
			pass: cloudant_PASSWORD
		},
		json: true,				// just saying that yes, we're sending json data
		body: data
	},
	function (error, response, body){			//response: cloudant will say 201 meaning good, we got it 
		if (response.statusCode == 201){
			// console.log("Saved!");
			res.json(body);
		}
		else{
			// console.log("Uh oh...");
			console.log("Error: " + res.statusCode);
			res.send("Something went wrong...");
		}
	});
});

//step two get
//JSON Serving route - Serve ALL Data
app.get("/api/all", function(req,res){
	// console.log('Making a db request for all entries');
	//Use the Request lib to GET the data in the CouchDB on Cloudant
	Request.get({
		url: cloudant_URL+"/_all_docs?include_docs=true",
		auth: {
			user: cloudant_KEY,
			pass: cloudant_PASSWORD
		},
		json: true
	},
	function (error, response, body){
		var theRows = body.rows;		//look at the json thing, there is an object called rows
		//Send all of the Data           //it has the data that you want
		res.json(theRows);
	});
});



//Catch All Route
app.get("*", function(req, res){
	res.send('Sorry, nothing doing here.');
});

// Start the server

var port= process.env.PORT || 3000
app.listen(port);
console.log('Express started on port ' + port);





