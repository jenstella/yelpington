const express = require("express");
const { request } = require("http");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('public'));






app.listen(port, () => {
  console.log("listening on port:", port);
});
