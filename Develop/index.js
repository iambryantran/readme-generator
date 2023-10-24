// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        choices: [
            {name: 'Apache License 2.0', value: 'Apache'}, 
            {name: 'GNU General Public License v3.0', value: 'GNUv3'},
            {name: 'MIT License', value: 'MIT'},
            {name: 'BSD 2-Clause "Simplified" License', value: 'BSD2'},
            {name: 'BSD 3-Clause "New" or "Revised" License', value: 'BSD3'}, 
            {name: 'Creative Commons Zero v1.0 Universal', value: 'CreativeCommonsZero'},
            {name: 'Eclipse Public License 2.0', value: 'Eclipse'},
            {name: 'Mozilla Public License 2.0', value: 'Mozilla'},
            {name: 'The Unlicense', value: 'Unlicense'}],
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
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) console.log(err);
        console.log('The file has been saved!');
    })
};

// TODO: Create a function to initialize app
function init() {
    const askUser = async () => {
        try {
            const userReponse = await inquirer.prompt(questions)
            // const fileData = await fs.promises.writeFile('README.md', generateMarkdown(userReponse));
            console.log(userReponse);
            writeToFile('README.md', generateMarkdown(userReponse));
        } catch (err) {
            console.log(err);
        }
    }
    askUser();
}

// Function call to initialize app
init();
