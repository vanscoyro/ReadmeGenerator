// function to generate markdown for README
function generateMarkdown(response) {

  const {title, name, gitHubUserName, contact, description, directions, contributions, license, testCase, language} = response

  return `
# ${title}
## by ${name}
_______________________________________________________________
### Description 
* ${description}
  
### License : 
<img src='https://img.shields.io/badge/license-${license}-blue' alt="license-badge">
  
* Info on license: https://opensource.org/licenses/${license}
_______________________________________________________________
### Installation Instructions:
* ${directions}

_______________________________________________________________

### Main Language : 
* ${language}
<img src = "https://img.shields.io/badge/${language}%20-%2343853D.svg" alt="language-badge">

### Contribution Policy: 
* ${contributions}
_______________________________________________________________
### Test Cases:
* ${testCase}
_______________________________________________________________
### Contact Me \n
<img src='https://img.shields.io/badge/github-${gitHubUserName}-orange' alt="github-badge">\n
* https://github.com/${gitHubUserName}
* ${contact}

### TABLE OF CONTENTS 
_______________________________________________________________
* [Description](#description)
* [License](#license)
* [Installation](#installation-instructions)
* [Main Language](#main-language)
* [Contribution Policy](#contribution-policy)
* [Test Case](#test-cases)
* [Contact Me](#contact-me)



    
  `
}

module.exports = generateMarkdown;
