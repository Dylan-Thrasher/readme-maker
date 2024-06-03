// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const choice = (license);
  switch (choice) {
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
      break;

    case "ISC":
      return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
      break;
    
    case "Mozilla":
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
      break;
  
    default:
      return ``;
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const choice = (license);
  switch (choice) {
    case 'MIT':
      return `[License: MIT](https://opensource.org/licenses/MIT)`
      break;

    case "ISC":
      return `[License: ISC](https://opensource.org/licenses/ISC)`
      break;
    
    case "Mozilla":
      return `[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`
      break;
  
    default:
      return ``;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License 
  This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests 
  ${data.tests}
  ## Questions
  For any questions, please reference my repositories at [${data.github}'s Github](https://github.com/${data.github}) or email me at ${data.email}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
