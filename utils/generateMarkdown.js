// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {
  if (license === "None") {
    return ``
  }
  else{
    return `![Badge Link](https://img.shields.io/badge/license-${license}-blue)  `
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "None") {
      return ``;
    }
    else{
      return `* [License](#license)`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

  function renderLicenseSection(license) {
    let licenseName;
    switch(license){
      case"GNU":
      licenseName = "General Public License (GNU)"
      break;
    }
      if (license === "None") {
        return ``;
      } else {
        return `## Liecense
        This project is licensed with ${licenseName}`;
      }
 }

// TODO: Create a function to generate markdown for README
export function generateMarkdown(response) {
  return `${renderLicenseBadge(response.license)}

Title

#${response.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
${renderLicenseLink(response.license)}
* [Contact](#Contact)


## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Contribution
${response.contribution}

## Test 
${response.test}

# Contact Information
* Github Name: ${response.userName}
* Contact Email: ${response.userEmail}




`;

}

// module.exports = generateMarkdown;
