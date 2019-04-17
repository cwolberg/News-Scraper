var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");
var express = require("express");
var app = express();
var mongoose = require("mongoose");

module.exports = function (app) {

  // TODO: FIX THIS ROUTE, IT IS BROKEN
  // Route for grabbing a specific Article by id
  app.get("/articles/:id", function (req, res) {
    db.Article.findOne({ _id: req.params.id })
      .populate("note")
      .then(function (dbArticle) {
        res.json(dbArticle);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // Route for updating an Article's Note
  app.post("/articles/:id", function (req, res) {
    db.Note.create(req.body)
      .then(function (dbNote) {
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
      })
      .then(function (dbArticle) {
        res.json(dbArticle);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  // Route for creating a new comment
  app.post("/notes", function (req, res) {
    db.Note.find({})
      .then(function (dbNote) {
        res.json(dbNote);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // Route for retrieving all Notes from db
  app.get("/notes", function (req, res) {
    db.Note.find({})
      .then(function (dbNote) {
        res.json(dbNote);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // Route for getting/finding all notes in the database from a unique article.
  app.get("/notes/:id", function (req, res) {
    if (req.params.id) {
      db.Note.find({
        "article": req.params.id
      })
        .exec(function (error, doc) {
          if (error) {
            console.log(error)
          } else {
            res.send(doc);
          }
        });
    }
  });

  //Delete a note
  app.delete("/notes/:id", function (req, res) {
    db.Note.deleteOne({ _id: req.params.id },
      function (err, data) {
        if (err) {
          console.log(err);
        }
        else {
          res.json(data);
        }
      });
  });
}