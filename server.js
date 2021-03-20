//imports
const express = require("express");
const { request } = require("http");
const path = require("path");
const app = express();

//sets up port
const port = process.env.PORT || 5000;
//middleware to build static directory
const staticDir = path.resolve("./client/build");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true
});

//shows api
app.get("/api", (req, res) => {
  res.sendFile(path.resolve("./api/directory.json"));
});

//shows restaurant info if /id is added
app.get("/api/:id", (req, res) => {
  res.sendFile(path.resolve(`./api/${req.params.id}.json`));
});

//to get the page /restaurant-id
app.get("/api/:id", (req, res) => {
  res.sendFile(path.resolve(`/api/'${req.params.id}.json`));
});

//shows us what port we are viewing on in terminal
app.listen(port, () => {
  console.log("listening on port:", port);
});
