const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name : "title",
    },
    {
        type: "input",
        message: "What is your name?",
        name : "name",
    },
    {
        type: "input",
        message: "What is your Github Username?",
        name : "gitHubUserName",
    },
    {
        type: "input",
        message: "What is your email?",
        name : "contact",
    },

    {
        type: "input",
        message: "Please give a brief description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "directions",
    },
    {
        type: "input",
        message:"What are your contribution guidelines?",
        name: "contributions",
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
    },
    {
        type: "input",
        message:"Please provide information for any Test Cases",
        name: "testCase",
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
