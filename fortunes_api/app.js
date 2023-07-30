const express = require("express");
const fortunes = require("./data/fortunes");

const app = express();

//this allows u

app.get("/fortunes", (req, res) => {
  res.json(fortunes);
});

app.get("/fortunes/random", (req, res) => {
  res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

app.get("/fortunes/:id", (req, res) => {
  console.log(req.params);

  res.json(fortunes.find((f) => f.id == req.params.id));
});

module.exports = app;
