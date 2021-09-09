//include everything needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./dist/generateHTML");



// created an array of questions for user input
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the team manager\'s name.',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the team manager\'s employee ID.',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the team manager\'s email address.',
            },
            {
                type: 'input',
                name: 'office',
                message: 'Please enter the team manager\'s office number.',
            },
            {
                type: 'rawlist',
                name: 'staff',
                message: 'Would you like to add an engineer or intern to your team roster?',
                choices: ['Yes: engineer', 'Yes: intern', 'No, the roster is complete'],
                // when: (answer) => answer.enterEngineer === true,
            },

        ])

        // .then((answer) => {
        //     if (answer.enterEngineer) {

        //     }
        // })

        // function to initialize app
        .then((data) => fs.writeFileSync('index.html', generateHTML(data)))
        .then(() => console.log('Successfully created an HTML file.'))
        .catch((err) => console.error(err));

}

// Function call to initialize app
init();

