const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Developer = require('./lib/Developer');
const Intern = require('./lib/Intern')

let manager = [];
let developer = [];
let intern = [];
let team = { manager, developer, intern };

function Prompt() {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role.",
            choices: ['Manager', 'Developer', 'Intern']
        },
        {
            type: 'input',
            name: 'employee',
            message: "Please provide the employee's name."
        },
        {
            type: 'input',
            name: 'id',
            message: "Please provide the employee's ID number."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide the employee's email address."
        }
    ])
    .then(({ employee, id, email, role }) => {
        if (role === 'Manager') {
            return inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'office',
                    message: "Please provide the manager's office number."
                },
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: "Would you like to add another employee?",
                    default: false
                }
            ])
            .then(({ office, addEmployee}) => {
                manager.push(new Manager(employee, id, email, office))
                console.log(team)
                if (addEmployee) {
                    console.log(team)
                    return Prompt();
                }
            })
        } else if ( role === 'Developer') {
            return inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'github',
                    message: "Please provide the developer's Github link."
                },
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: "Would you like to add another employee?",
                    default: false
                }
            ])
            .then (({ github, addEmployee}) => {
                developer.push(new Developer(employee, id, email, github))
                console.log(team)
                if (addEmployee) {
                    console.log(team)
                    return Prompt()
                }
            })
        } else {
            return inquirer
            .prompt ([
                {
                    type: 'input',
                    name: 'collegeUniversity',
                    message: "Please enter the intern's college or university."
                },
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: "Would you like to add another employee?",
                    default: false
                }
            ])
            .then (({ collegeUniversity, addEmployee }) => {
                intern.push(new Intern(employee, id, email, collegeUniversity))
                console.log(team)
                if (addEmployee) {
                    console.log(team)
                    return Prompt()
                }

            })
        }
    })
}

Prompt();