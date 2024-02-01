const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db.json");

app.use(cors("*"));

app.use("/static", express.static("images"));

app.get("/", (req, res) => {
  res.send("je suis dans le '/'");
});

app.get("/db", (req, res) => {
  res.json(db);
});

app.listen("4242", console.log("http://localhost:4242"));
