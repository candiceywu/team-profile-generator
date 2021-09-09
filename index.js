//include everything needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");


const employees = [];

function init() {
    generateHtml();
    addTeamMember();
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the team member\'s name.',
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

            },

        ])



        // function to initialize app
        .then((data) => fs.writeFileSync('index.html', generateHTML(data))) //how do you export an HTML?
        .then(() => console.log('Successfully created an HTML file.'))
        .catch((err) => console.error(err));


}
// Function call to initialize app
init();

