// packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');
const generateHTML = require('./utils/generateHTML')

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'memberName',
        message: 'Employee Name',
    },
    {
        type: 'input',
        name: 'teammanagerName',
        message: 'Team Manager Name',
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Employee ID',
    },   
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Email Address',
    },    
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office Number',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, '/dist/', fileName), data)
}

// function to initialize app
function init() {
    inquirer.prompt (questions).then(answers => {
        writeToFile(answers.memberName + '.html', generateHTML(answers))
        console.log(answers)
    })
}

// Function call to initialize app
init();
