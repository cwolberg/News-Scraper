
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");
var express = require("express");
var app = express();
var mongoose = require("mongoose");

module.exports = function (app) {

  // Route for getting all unsaved articles from db
  app.get("/", function (req, res) {
    db.Article.find({ saved: false }, function (err, result) {
      if (err) {
        console.log("Errorfinding unsaved articles: " + err);
      }
      else {
        res.render("index", {
          articles: result
        });
      }
    });
  });

  // this gets id of article being saved and updates its status
  app.put("/savedarticles/:id", function (req, res) {
    db.Article.findOneAndUpdate({ _id: req.params.id }, { saved: true })
      .then(function (result) {
        console.log("this saved-article is working");
        res.json(result);
      })
      .catch(function (err) {
        res.json(err);
        console.log("Error finding saved articles: " + err);
      });
  });

  // this grabs id of article being unsaved and updates its status
  app.put("/unsavedarticles/:id", function (req, res) {
    db.Article.findOneAndUpdate({ _id: req.params.id }, { saved: false })
      .then(function (result) {
        console.log("this unsaved article is working");
        res.json(result);

      })
      .catch(function (err) {
        res.json(err);
        console.log("Error finding saved articles: " + err);
      });
  });

  // Route for getting all saved articles
  app.get("/saved", function (req, res) {
    db.Article.find({ saved: true }, function (error, result) {
      if (error) {
        console.log("Error getting saved articles: " + error);
      }
      else {
        res.render("saved", {
          articles: result,
        });
      }
    });
  });

  //this grabs id of article and deletes it from the db
  app.delete("/deletearticles/:id", function (req, res) {
    db.Article.findOneAndRemove({ _id: req.params.id })
      .then(function (result) {
        console.log("this article has been deleted");
        res.json(result);
      })
      .catch(function (err) {
        res.json(err);
        console.log("Error finding saved articles: " + err);
      });
  });

  app.post('/', function (req, res) {
    res.json(data);
  });

}