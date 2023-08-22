// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import {generateMarkdown} from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
inquirer.prompt([
    {
        type : "input",
        name : "title",
        message : "The title to your project", 

    },
    {
        type : "input",
        name : "description",
        message : "Give more information about your project", 
    },
    {
        type : "input",
        name : "installation",
        message : "What is the installation"
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
        name: "license",
        message: "What would be the license you will use?"

    },
    {
        type : "input",
        name : "userName",
        message : "Please input your git hub username", 
    },
    {
        type : "input",
        name : "userEmail",
        message : "Optional if you would like to put in your email", 
    },

    ]).then((response) => {
        fs.writeFile("generatorREADME", generateMarkdown(response), (err) => {
            if(err)
                console.log(err);
            else {
                console.log("README generated")
            }

        })
    })
}

// Function call to initialize app
init();
