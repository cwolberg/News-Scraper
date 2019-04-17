// Require dependancies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

// Require the models
var db = require("./models");

var PORT = process.env.PORT || 3000;

// If deployed, use deployed database, else use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/voxPopulater";

// Initialize Express
var app = express();

// Morgan, for logging requests
app.use(logger("dev"));

// Body-parser, for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Express.static, to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB and use mongoose for async' queries through promises
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

//Use Handlebars
var exphbs = require("express-handlebars");
// sets main.handlebars as the default layout 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")
var handlebars = require("handlebars");
handlebars.registerHelper("json", context => JSON.stringify(context));

// Routes below
require("./controllers/fetch.js")(app);
require("./controllers/headline.js")(app);
require("./controllers/note.js")(app);

// Starts server
app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});
