var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");
var express = require("express");
var app = express();
module.exports = function (app) {
  // A GET route for scraping Vox website
  app.get("/scrape", function (req, res) {
    axios.get("https://www.vox.com/world/").then(function (response) {
      var $ = cheerio.load(response.data);
      $("div.c-compact-river__entry").each(function (i, element) {
        var result = {};

        result.title = $(this).find("h2.c-entry-box--compact__title").text().trim();
        result.link = $(this).find("h2.c-entry-box--compact__title").children().attr("href");
        result.summary = $(this).find("div.c-byline").text().trim();
        result.image = $(this).find("a.c-entry-box--compact__image-wrapper").find("div.c-entry-box--compact__image").find("img").attr("src");
        console.log(result);

        // Create a new Article using result-object from scraping
        db.Article.create(result)
          .then(function (dbArticle) {
            console.log(dbArticle);
          })
          .catch(function (err) {
            console.log("scrape error occuring in fetch.js file: " + err);
            return res.json(err);
          });
      });
      res.send("Scrape Complete");
      console.log("Scrape Complete");
    });
  });
}