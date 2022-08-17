const express = require("express");

const { notes } = require("./db/db");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
// app.post("/api/notes", (req, res) => {
//   res.send("Hello!");
// });

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
