const express = require("express");
const app = express();
const cors = require("cors");
const needs = require("./needs.json");

app.use(cors("*"));

app.use("/static", express.static("images"));

app.get("/", (req, res) => {
  res.send("je suis dans le '/'");
});

app.get("/needs", (req, res) => {
  res.json(needs);
});

app.listen("4242", console.log("http://localhost:4242"));
