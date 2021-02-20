// function to generate markdown for README
function generateMarkdown(response) {

  const {title, name, gitHubUserName, contact, description, directions, contributions, license, testCase} = response

  return `
# ${title}
## by ${name}
_______________________________________________________________
### Description 
* ${description}
  
#### License : 
<img src='https://img.shields.io/badge/license-${license}-blue' alt="license-badge">
  
* Info on license: https://opensource.org/licenses/${license}
_______________________________________________________________
#### Installation Instructions:
* ${directions}

#### Contribution Policy: 
* ${contributions}
_______________________________________________________________
### Test Cases:
* ${testCase}
_______________________________________________________________
### Questions? 
#### Contact Me \n
<img src='https://img.shields.io/badge/github-${gitHubUserName}-orange' alt="github-badge">\n
* https://github.com/${gitHubUserName}
* ${contact}
TABLE OF CONTENTS 
_______________________________________________________________
* [Description](#description)
* [License](#license)
* [Installation](#directions)
* [Test Case](#testCase)
* [Questions?](#questions)



    
  `
}

module.exports = generateMarkdown;
