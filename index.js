// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution',
    },
    {
        type: 'input',
        name: 'deployedlink',
        message: 'Deployed Link',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose license',
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", 'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License', "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "GNU General Public License v2.0", 
        "Mozilla Public License 2.0", "The Unlicense"]   
    },
    {
        type: 'input',
        name: 'username',
        message: 'GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, '/dist/', fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then(answers => {
        writeToFile('README.md', generateMarkdown(answers))
        console.log(answers)
    })
}

// Function call to initialize app
init();
