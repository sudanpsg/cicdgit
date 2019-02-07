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

app.get("/dummy", (req, res) => {
  res.send("hello dummy");
});

app.get("/cicd", (req, res) => {
  res.send("This is a continous intergration and deployment");
});

app.get("/dummy1", (req, res) => {
  res.send("hello dummy1");
});

//Ok this is to check the pull request

app.listen(3000);

//ok I want to merge this change to master with a oull request
