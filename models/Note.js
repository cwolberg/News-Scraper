var mongoose = require("mongoose");

// Save reference to Schema 
var Schema = mongoose.Schema;

// Schema constructor creates new NoteSchema object
var NoteSchema = new Schema({
  body: String
});

// Creates model from the above schema.
var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
