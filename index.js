//include everything needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

//team array
const teamArray = [];

function init() {
    generateHtml();
    addTeamMember();
}

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the team manager\'s name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the manager\'s employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the manager\'s email address:',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter the manager\'s office number:',
            },
            {
                type: 'rawlist',
                name: 'role',
                message: 'Please select the team member\'s role:',
                choices: ['Manager', 'Engineer', 'Intern']
            },
        ])


        // function to loop through unique keys
        .then(function ({ name, id, email, role }) {
            const roleType = "";
            if (role === 'Engineer') {
                roleType = 'github';
            } else if (role === 'Intern') {
                roleType = 'school';
            } else {
                roleType = 'office';
            }
            inquirer
                .promt([
                    {
                        type: 'input',
                        name: 'roleType',
                        message: 'Please enter the team member\'s ${roleType}:',
                    },
                ])
        })

    // .then((data) => fs.writeFileSync('index.html', generateHTML(data))) //how do you export an HTML?
    // .then(() => console.log('Successfully created an HTML file.'))
    // .catch((err) => console.error(err));


}
// Function call to initialize app
init();

