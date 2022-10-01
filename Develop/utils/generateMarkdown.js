// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const licenseBadge = {
    None: '',
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    Eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    SIL: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
    Unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  
  return licenseBadge[license];
  
};

// Create a function that returns the license link
function renderLicenseLink(license) {
  const link = {
    Apache: '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
    Boost: '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)',
    Eclipse: '[Eclipse]https://opensource.org/licenses/EPL-1.0)',
    GNU: '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
    IBM: '[IBM](https://opensource.org/licenses/IPL-1.0)',
    ISC: '[ISC](https://opensource.org/licenses/ISC)',
    MIT: '[MIT](https://opensource.org/licenses/MIT)',
    SIL: '[SIL Open Font-1.1](https://opensource.org/licenses/OFL-1.1)',
    Unlicense: '[Unlicense](http://unlicense.org/)'
  }
  
  return link[license]
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return '';
  } else {
    return`## License

Licensed under the ${renderLicenseLink(license)} license`
  }
};

function LicenseTableOfContents(license) {
  if (license == 'None') {
      return "";
  } else {
    return `- [License](#license)`
  }  
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Content
  - [Project Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${LicenseTableOfContents(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For additional questions you can contact me:

  ${data.email}

  GitHub: [github/${data.github}](http://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
