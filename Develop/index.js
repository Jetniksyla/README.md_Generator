// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("././utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project? (Required)",
    validate: function (input) {
      return input !== "" ? true : "Please enter a valid name.";
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project:",
    validate: function (input) {
      return input !== ""
        ? true
        : "Please Provide a description of the project.";
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Does your project require installation instructions? If so, provide them below.",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose your preferred license for this project: ",
    choices: ["MIT", "Apache-2.0", "GPL-3.0", "BSD2", "BSD3", "None"],
    validate: function (input) {
      return input !== "" ? true : "Please choose your preferred license:";
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide example on how to use your repo: ",
  },
  {
    type: "input",
    name: "required",
    message: "What command should be run to install required dependencies? ",
    default: "(npm i), add '@version' if needed",
  },
  {
    type: "input",
    name: "creator",
    message: "What is your GitHum username? ",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "contributing",
    message:
      "How can other developers contribute to this project? Provide guidelines for how to do so: ",
  },
  {
    type: "input",
    name: "credit",
    message:
      "Please provide the names of those that need to credited for the development of the application.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", (error) =>
    error
      ? console.error(error)
      : console.log("Successfully created README.md!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown({ ...answers }), () => {
      console.log("Write operation complete.");
    });
  });
}
// Function call to initialize app
init();
