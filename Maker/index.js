// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is a description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What is the license you used for your project?",
        choices: [
            'MIT',
            '',
            ''
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are some test examples?"
    },
    {
        type: "input",
        name: "email",
        message: "What email can people reach you about your project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile("readme.md", data, (err) => {
        if (err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const string = generateMarkdown(answers);
       writeToFile("readme.md", string)
        })
    }

// Function call to initialize app
init();
