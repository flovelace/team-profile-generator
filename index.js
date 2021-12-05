const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Developer = require('./lib/Developer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

let manager = [];
let developer = [];
let intern = [];
let team = { manager, developer, intern };

function prompt() {
    return inquirer.prompt([
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
        },
    ])
    .then(({ role, employee, id, email }) => {
        if (role === 'Manager') {
            return inquirer
            .prompt([
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
            .then(({ office, addEmployee }) => {
                manager.push(new Manager(employee, id, email, office ))
                if (addEmployee) {
                    return prompt();
                }
            })
        } else if (role === 'Developer') {
            return inquirer.prompt ([
                {
                    type: 'input',
                    name: 'github',
                    message: "Please provide the developer's Github link"
                },
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: "Would you like to add another employee?",
                    default: false
                }
            ])
            .then (({ github, addEmployee}) => {
                developer.push(new Developer (employee, id, email, github))
                if (addEmployee) {
                    return prompt();
                }
            })
        } else {
            return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'collegeUniversity',
                    message: "Please enter the intern's college of university."
                },
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: "Would you like to add another employee",
                }
            ])
            .then (({ collegeUniversity, addEmployee }) => {
                intern.push(new Intern (employee, id, email, collegeUniversity))
                if (addEmployee) {
                    return prompt();
                }
            })
        }
    })
}

prompt()
.then(endTeam => {
    return pageGen(team)
})
.then (renderHtml => {
    copyFile()
    return writeFile(renderHtml)
});