const Functionality = require("../models/functionality");
const Requirement = require("../models/requirements");

exports.getRequirement = (req, res) => {
  const functionality = new Functionality({
    title: "Display Personal Title",
    requirement: "Add Personal Title",
    description:
      "A customizable title that represent the users name or pseudonmy",
  });

  functionality.save();

  const requirement = new Requirement({
    role: "assistant",
    title: "Personal Portfolio",
    functionality: functionality._id,
    additional: ["", ""],
  });

  requirement
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: error });
    });
};
