const Functionality = require("../models/functionality");
const Requirement = require("../models/requirements");

exports.getRequirement = (req, res) => {
  const functionality = new Functionality({
    title: "",
    requirement: "",
    description: "",
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
