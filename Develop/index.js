// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage Information: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution Guidelines: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Test Instructions: ',
        name: 'testing'
    },
    {
        type: 'list',
        message: 'License: ',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        message: 'GitHub Username: ',
        name: 'githubUser'
    },
    {
        type: 'input',
        message: 'Email: ',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    const askUser = async () => {
        try {
            const userReponse = await inquirer.prompt(questions)
            console.log(userReponse);
        } catch (err) {
            console.log(err);
        }
    }
    askUser();
}

// Function call to initialize app
init();
