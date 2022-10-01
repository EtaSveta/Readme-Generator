// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
const fs = require('fs');

// const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the Project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!')
            return false;
          }
        }  
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Still need a brief description')
              return false
            }
          }
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
        type: 'list',
        name: 'license',
        message: 'What license is used for this project?',
        choices: ['None','Apache', 'Boost', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'SIL', 'Unlicense']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Are there any quidelines for contributing to this application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Would you like to include any tests?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email address to reach you with questions? (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your github username!')
              return false
            }
          }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Required)',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your github username!')
              return false
            }
          }
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


// Create a function to initialize app
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

