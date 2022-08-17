const express = require("express");
// const fs = require("fs");
// const path = require("path");
const { notes } = require("./db/db");

const PORT = process.env.PORT || 3001;
const app = express();

// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
// app.post("/api/notes", (req, res) => {
//   res.send("Hello!");
// });

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
