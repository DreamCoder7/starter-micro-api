const express = require("express");

const app = express();

// var http = require("http");
// http
//   .createServer(function (req, res) {
//     console.log(`Just got a request at ${req.url}!`);
//     res.write("Yo!");
//     res.end();
//   })
//   .listen(process.env.PORT || 3000);

app.get("/", (req, res) => {
  console.log(`Just got a request at ${req.url}!`);
  res.send("Yo!");
  res.end();
});

app.listen(process.env.PORT || 3000);
