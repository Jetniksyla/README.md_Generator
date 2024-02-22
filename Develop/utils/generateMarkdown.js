// TODO: Create a function that returns a license badge based on which license is passed in

// Function to render the license badge
function renderLicenseBadge(license) {
  if (license && license !== "none") {
    // Generate badge based on the license provided
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
  return "";
}
// TODO: Create a function that returns the license link

// Function to render the license link
function renderLicenseLink(license) {
  if (license && license !== "none") {
    return `[License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README

// Function to render the license section of README
function renderLicenseSection(license) {
  if (license && license !== "none") {
    return `## License
This project is licensed under the ${license} license. Click the [link](https://opensource.org/licenses/${license}) for more details.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Questions
For questions about the project:
- GitHub Profile: [${data.creator}](https://github.com/${data.creator})
- Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
