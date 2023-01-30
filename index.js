// packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const team = []
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

// loop for user input
const mainMenu = () => {
    inquirer.prompt(questions)
    .then(answer=>{
        console.log(answer)
        const newManager = new Manager(answer.memberName, answer.employeeId, answer.employeeEmail, answer.officeNumber)
        team.push(newManager)
    ask()
    })
}
const ask =()=>{

    inquirer.prompt({
        type: "list", 
        name: "direction",
        message: "Would you like to add an Engineer or an Intern?",
        choices: ["Engineer", "Intern", "Done"]
    }) .then(answer => {
        if (answer.direction === "Engineer") {
            addEngineer()
        } else if (answer.direction === "Intern") {
            addIntern()
        } else {
            writeHTML();
        }
    })
}
const addManager = () => {
    const managerQuestions = [...questions, {type: "input", name: "officeNumber",  message: "Enter office number"}]
    console.log(managerQuestions)
    inquirer.prompt(managerQuestions).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(manager)
        mainMenu();
    })
}
const addEngineer = () => {
    const engineerQuestions = [...questions, {type: "input", name: "gitHub",  message: "Enter GitHub"}]
    console.log(engineerQuestions)
    inquirer.prompt(engineerQuestions).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
        team.push(engineer)
        ask();
    })
    
}
const addIntern = () => {
    const internQuestions = [...questions, {type: "input", name: "school",  message: "Enter school"}]
    console.log(internQuestions)
    inquirer.prompt(internQuestions).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(intern)
        ask();
    })
}


mainMenu();

// Parse the information to an HTML page
function writeHTML () {
    fs.writeFile('./dist/index.html', generateHTML(team), (err) => err ? console.log(err) : console.log("Your team page is built check out index.html!"))
        }

// // function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(__dirname, '/dist/', fileName), data)
// }

// // function to initialize app
// function init() {
//     inquirer.prompt (questions).then(answers => {
//         writeToFile(answers.memberName + '.html', generateHTML(answers))
//         console.log(answers)
//     })
// }

// // Function call to initialize app
// init();
