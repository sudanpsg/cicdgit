const _ = require("lodash");
const express = require("express");
const app = express();
//adding commment for pull request
app.get("/", (req, res) => {
  res.send({ Name: "hari", age: 25, skill: "cloud" });
});

app.get("/stud", (req, res) => {
  res.send("hello world");
});

app.listen(3000);
