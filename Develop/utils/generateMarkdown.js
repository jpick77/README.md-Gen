// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return`![MIT](https://img.shields.io/badge/License-MIT-red)`
  }else if(license === "Apache"){
    return`![Apache](https://img.shields.io/badge/License-Apache-red)`
  } else if(license === "GNU"){
    return`![GNU](https://img.shields.io/badge/License-GNU-red)`
  }else {
    return``
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}

  ## Table of Contents

  - [installation](#installation)

  - [usage](#usage)

  - [license](#license)

  - [test](#test)

  - [contrabution](#contrabution)

  - [questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Test
  ${data.test}

  ## Contrabution
  ${data.contrabution}

  ## Questions
  [${data.github}](https://github.com/${data.github})

  ${data.email}
`;
}

module.exports = generateMarkdown;
