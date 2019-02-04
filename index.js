const _ = require("lodash");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ Name: "hari", age: 25, skill: "cloud" });
});

app.listen(3000);
