//include everything needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
// const generateHTML = require("./src/generateHTML");

//team array
const teamArray = [];

function init() {
    // generateHtml();
    addTeamMember();
}

const addTeamMember = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the team member\'s name:',
            },

            {
                type: 'input',
                name: 'id',
                message: 'Please enter the team member\'s employee ID:',
            },

            {
                type: 'input',
                name: 'email',
                message: 'Please enter the team member\'s email address:',
            },

            {
                type: 'rawlist',
                name: 'role',
                message: 'Please select the team member\'s role:',
                choices: ['Manager', 'Engineer', 'Intern']
            },

            {
                type: 'input',
                name: 'github',
                message: 'Please enter in the engineer\'s github username:',
                when: (input) => input.role === 'Engineer',
            },

            {
                type: 'input',
                name: 'school',
                message: 'Please enter in the intern\'s school name:',
                when: (input) => input.role === 'Intern',
            },

            {
                type: 'input',
                name: 'office',
                message: 'Please enter in the manager\'s office number:',
                when: (input) => input.role === 'Manager',
            },

            {
                type: 'confirm',
                name: 'additionalMembers',
                message: 'Would you like to add any other team members?',
                default: false
            }
        ])

        .then(employeeInfo => {
            let { name, id, email, role, github, school, office, additionalMembers } = employeeInfo;
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            } else if (role === 'Manager') {
                employee = new Manager(name, id, email, office);
                console.log(employee);
            }
            teamArray.push(employee);

            if (additionalMembers) {
                return addTeamMember(teamArray);
            } else {
                return teamArray;
            }
        });
};

// //function to generate HTML page with file system
// .then((data) => fs.writeFileSync('index.html', generateHTML(data))) //how do you export an HTML?
// .then(() => console.log('Successfully created an HTML file.'))
// .catch((err) => console.error(err));

// Function call to initialize app
init();

