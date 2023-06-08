const Requirement = require("../models/requirements");

exports.getRequirement = (req, res) => {
  const requirement = new Requirement({
    role: "assistant",
    title: "Personal Portfolio",
    functionality: [
      {
        title: "Display Personal Title",
        requirement: "Add Personalized Title",
        description:
          "A customizable title that represent the users name or pseudonym",
      },
      {
        title: "Experience",
        requirement: "Add skill / Experience section",
        description:
          "List of skills and experience to showcase the users background",
      },
    ],
    additionalData: [
      "Platform (website or mobile app)",
      "Prefered technology",
      "Timeline & deadlines",
      "Design Preferences(color, layout, etc)",
      "Contact info (Email, social media, link)",
    ],
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/45958b78921543.5cb376bea013f.jpg",
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
