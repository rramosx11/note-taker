const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
// const { newNote, deleteNote, findByID } = require

const { notes } = require("../../db/db.json");

const NewNote = (note, notesArray) => {
  // adds new note to notes array
  notesArray.push(note);

  // saves notes array to db.json
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
};

// finds specific note by ID from notes array
const findById = (id, notesArray) => {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
};

const deleteNote = (note, notesArray) => {
  // removes specific note from notes array
  const index = notesArray.indexOf(note);
  notesArray.splice(index, 1);

  // rewrites db.json with new array
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
};

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  //   const newNote = {
  //     id: uuidv4(),
  //     title: req.body.title,
  //     text: req.body.text,
  //   };
  //   const noteData = JSON.parse(notes);
  //   noteData.push(newNote);
  req.body.id = uuidv4();
  NewNote(req.body, notes);
  res.json(req.body);
});

router.delete("/notes/:id", (req, res) => {
  const note = findById(req.params.id, notes);
  deleteNote(note, notes);
  res.json;
});
module.exports = router;
