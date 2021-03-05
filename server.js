const express = require("express");
const { request } = require("http");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.sendFile(path.resolve('./api/directory.json'))
  });



app.listen(port, () => {
  console.log("listening on port:", port);
});
