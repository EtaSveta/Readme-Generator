// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./develop/utils/generateMarkdown.js');
const fs = require('fs');

// const { default: inquirer } = require("inquirer");

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
        message: 'Project usage:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'License',
        choices: ['Apache 2.0', 'Boost Software License 1.0', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
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
        message: ''
    },
    {
        type: 'input',
        name: 'github',
        message: ''
    }
];

// TODO: Create a function to write README file
function writeToFile(fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
            }
      
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
              ok: true,
              message: 'File created!'
            });
        });
    });
}


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const genMark = generateMarkdown(data)
        console.log(genMark);
        return writeToFile(genMark);
    })
    .catch((error) => {
        console.log(error);
    })
};

// Function call to initialize app
init();

