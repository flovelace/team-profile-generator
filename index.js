const inquirer = require("inquirer");

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
                    message: "Wopuld you like to add another employee?",
                    default: false
                }
            ])
        }
    }
    )
}