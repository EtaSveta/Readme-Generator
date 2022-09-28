// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./develop/utils/generateMarkdown.js');

const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the Project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage'
    },
    {
        type: 'input',
        name: 'license',
        message: ''
    },
    {
        type: 'input',
        name: 'contributing',
        message: ''
    },
    {
        type: 'input',
        name: 'tests',
        message: ''
    },
    {
        type: 'input',
        name: 'email',
        message: 'github'
    },
    {
        type: 'input',
        name: '',
        message: ''
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const mark = generateMarkdown(data)
        console.log(mark);
        return data;
    })
    .catch((error) => {
        console.log(error);
    })
};

// Function call to initialize app
init();

