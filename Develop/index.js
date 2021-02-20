const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name : "title",
        validate: (value)=> { if (value){return true} else {return "Please enter project title"}},
    },
    {
        type: "input",
        message: "What is your name?",
        name : "name",
        validate: (value)=> { if (value){return true} else {return "Please enter your name"}},

    },
    {
        type: "input",
        message: "What is your Github Username?",
        name : "gitHubUserName",
        validate: (value)=> { if (value){return true} else {return "Please enter your GitHub username"}},

    },
    {
        type: "input",
        message: "What is your email?",
        name : "contact",
        validate: (value)=> { if (value){return true} else {return "Please enter your email"}},

    },

    {
        type: "input",
        message: "Please give a brief description of your project",
        name: "description",
        validate: (value)=> { if (value){return true} else {return "Please enter a brief description of your project"}},

    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "directions",
        validate: (value)=> { if (value){return true} else {return "Please enter the installation instructions for your project"}},

    },
    {
        type: "input",
        message:"What are your contribution guidelines?",
        name: "contributions",
        validate: (value)=> { if (value){return true} else {return "Please the contribution guidelines for your project"}},

    },
    {
        type: "list",
        message:"What kind of license should your project have?",
        choices : [
            "Apache",
            "MIT",
            "ISC",
            "GNU GPLv3",
        ],
        name: "license",
        validate: (value)=> { if (value){return true} else {return "Please choose one of the licenses"}},

    },
    {
        type: "list",
        message:"Please select the main language of this project",
        choices : [
            "javascript",
            "html5",
            "css3",
            "node.js",
        ],
        name: "language",
        validate: (value)=> { if (value){return true} else {return "Please choose a main language"}},

    },
    {
        type: "input",
        message:"Please provide information for any Test Cases",
        name: "testCase",
        validate: (value)=> { if (value){return true} else {return "Please enter any information about how to preform a test on your project"}},

    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error =>{
        if (error){
            return console.log(error)
        }else{
            console.log("readme generated sucessfully")
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers){
        const response = generateMarkdown(answers)
        writeToFile("README.md", response)
    })
}

// function call to initialize program
init();
