// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type : "input",
        name : "title",
        message : "The title to your project", 
    },
    {
        type : "input",
        name : "information",
        message : "Give more information about your project", 
    },
    {
        type : "input",
        name : "usage",
        message : "How do you plan to use this project in the near future", 
    },
    {
        type : "input",
        name : "contribution",
        message : "How will people contribute to the project", 
    },
    {
        type : "input",
        name : "test",
        message : "How do you plan to test this project", 
    },
    {
        type : "input",
        name : "github username",
        message : "Please inout your git hub username", 
    },
    {
        type : "input",
        name : "email",
        message : "Optional if you would like to put in your email", 
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) => {
        if(err)
            throw err;
        console.log('Succesfully put information onto the README!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
