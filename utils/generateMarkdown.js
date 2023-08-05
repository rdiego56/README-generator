// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``
  }
  else{
    return ``
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

  function renderLicenseBadge(license) {
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

# Title

#${response.title}

# Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#-Usage)
* [Contributing](#-Contributing)
* [Test](#-Test)
${renderLicenseLink(response.license)}


# Description
${response.description}

# Installation
${response.installation}

# Usage
${response.usage}

# Contributing
${response.contributing}

# Test 
${response.test}

# Contact Information
* Github Username: ${response.userName}
* Contact Email: ${response.userEmail}




`;

}

// module.exports = generateMarkdown;
