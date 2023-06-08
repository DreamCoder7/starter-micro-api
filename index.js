const express = require("express");
const mongoose = require("mongoose");
const Requirement = require("./model/requirements");

const app = express();
const uri = `mongodb+srv://${process.env.CYCLIC_DB_USER}:${process.env.CYCLIC_DB_PASS}@cluster0.uwydggw.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then((res) => {
    app.listen(process.env.PORT || 3000);

    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/requirements", (req, res) => {
  const requirement = new Requirement({
    role: "assistant",
    title: "Personal Portfolio",
    list: "**Required Sections:**",
    content: "More data is needed",
  });

  requirement
    .save()
    .then((res) => {
      res.send();
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: error });
    });
});

app.get("/", (req, res) => {
  console.log(`Just got a request at ${req.url}!`);
  res.send("Yo!");
  res.end();
});
