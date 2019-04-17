var mongoose = require("mongoose");

// Save reference to Schema constructor
var Schema = mongoose.Schema;

// Schema constructor creates a new UserSchema object
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  saved: {
    type: Boolean,
    required: true,
    default: false
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates a model from the above schema.
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
