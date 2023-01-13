// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return "[![Apache](https://img.shields.io/badge/license-apache-yellow)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GNU General Public License v3.0") {
    return "![GNU](https://img.shields.io/badge/license-gnu-blue)"
  } else if (license === "MIT License") {
    return "![MIT](https://img.shields.io/badge/license-mit-blue)"
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    return "![BSD](https://img.shields.io/badge/license-bsd-orange)"
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return "![BSD](https://img.shields.io/badge/license-bsd-orange)"
  } else if (license === "Boost Software License 1.0") {
    return "![BOOST](https://img.shields.io/badge/license-boost-green)"
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return "![CCU](https://img.shields.io/badge/license-ccu-green)"
  } else if (license === "GNU General Public License v2.0") {
    return "![GNU](https://img.shields.io/badge/license-gnu-blue)"
  } else if (license === "Mozilla Public License 2.0") {
    return "![MPL](https://img.shields.io/badge/license-mpl-purple)"
  } else if (license === "The Unlicense") {
    return "![UNL](https://img.shields.io/badge/license-unl-purple)"
  }
  else {
    return " "
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return " "
  } else {
    return "- [License](#license)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return " "
  } else {
    return `### License 
    This software is licensed under ${license}`
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Deployed Link](#deployedlink)
    - [Contact](#contact)
    ${renderLicenseLink(data.license)}
    ### Description
    ${data.description}
    ### Installation
    ${data.installation}
    ### Usage
    ${data.usage}
    ### Contribution
    ${data.contribution}
    ### Deployed Link
    ${data.deployedlink}
    ### Contact
    For more information, email: [${data.email}](mailto:${data.email})
    Or visit our GitHub page at: [${data.username}]

    ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;