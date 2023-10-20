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
        message: 'Installation: '
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage Information: '
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution Guidelines: '
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Test Instructions: '
        name: 'testing'
    },
    {
        type: 'list',
        message: 'License: '
        name: 'license'
        choices: []
    },
    {
        type: 'input',
        message: 'GitHub Username: '
        name: 'githubUser'
    },
    {
        type: 'input',
        message: 'Email: '
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
