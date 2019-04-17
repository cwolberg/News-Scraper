
// Scrapes articles
$("#scrape-articles").on("click", function (event) {

  $.ajax({
    method: "GET",
    url: "/scrape"
  })
    .then(function (data) {
      // logs scraped data
      console.log(data);
      location.href = ('/');
    })
});

// User clicks a "make a comment" button
$("body").on("click", "#make-comment", function () {
  var thisId = $(this).attr("data-id");

  // Ajax call for Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // Add note information to page
    .then(function (data) {
      $('#comment-modal').modal('show');
      console.log(data);
      $("#notes").append("<h2>" + data.title + "</h2>");
      $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
      $("#notes").append("<button data-id='" + data._id + "' id='save-comment'>Save Note</button>");

      if (data.note) {
        $("#bodyinput").val(data.note.body);
      }
    }).catch(function (err) {
      console.log("Error in saving comment in app.js: " + err);
    });
});

// Save-comment button from modal is clicked
$("body").on("click", "#save-comment", function (event) {
  // Grab the id associated with the article
  $('#comment-modal').modal('hide');
  var thisId = $(this).attr("data-id");
  console.log("comment saved");
  // Run a PUT request to update saved value of article
  // Run a POST request to change the note
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      body: $("#comment-input").trim().val()
    }
  })
    .then(function (data) {
      // Log the response
      console.log(data);
      // Empty notes section
      $("#comment-input").empty();
    })
    .catch(function (err) {
      console.log("Error in saving comment in app.js: " + err);
    });
});

// Save article button clicked
$("body").on("click", "#save-article", function (event) {
  // Grab id associated with the article
  var thisId = $(this).attr("data-id");
  console.log("article saved with this id: " + thisId);
  // Run a PUT request to update saved value of article
  $.ajax({
    method: "PUT",
    url: "/savedarticles/" + thisId,
  })
    .then(function (data) {
      location.reload();
    })
    .catch(function (err) {
      console.log("Error in article app.js: " + err);
    });
});

// User clicks to remove or unsave
$("body").on("click", "#unsave-article", function (event) {
  // Grab the id associated with the article 
  var thisId = $(this).attr("data-id");
  console.log("article saved with this id: " + thisId);
  // Run a PUT request to update saved value of article
  $.ajax({
    method: "PUT",
    url: "/unsavedarticles/" + thisId,
  })
    .then(function (data) {
      location.reload();
    })
    .catch(function (err) {
      console.log("Error in unsaving article app.js: " + err);
    });
});

// User clicks delete article button
$("body").on("click", "#delete-article", function (event) {
  // Grab the id associated with the article 
  var thisId = $(this).attr("data-id");
  console.log("article saved with this id: " + thisId);
  // Run a DELETE request to remove article from db
  $.ajax({
    method: "DELETE",
    url: "/deletearticles/" + thisId,
  })
    .then(function (data) {
      console.log("the article with id: " + thisId + " was deleted from the database");
      location.reload();
    })
    .catch(function (err) {
      console.log("Error in article app.js: " + err);
    });
});

// User clicks to view saved articles
$('#saved').on("click", function (event) {
  location.href = ('/saved');
});