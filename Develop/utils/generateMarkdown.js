// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  - [description](#description)

  - [installation](#installation)

  - [usage](#usage)

  - [license](#license)

  - [test](#test)

  - [contrabution](#contrabution)

  - [github](#github)

  - [email](#email)

  ## Description
  ${data.description}


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

  ## GitHub
  [${data.github}](https://github.com/${data.github})

  ## Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
