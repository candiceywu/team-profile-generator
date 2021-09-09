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

//do i need to wrap this all in an init()?

//function for manager info
const addManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the team manager\'s name:',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the team manager\'s name.');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'id',
                message: 'Please enter the team manager\'s employee ID:',
                validate: idInput => {
                    if (isNaN(idInput)) {
                        console.log('Please enter the team manager\'s employee ID.');
                        return false;
                    } else {
                        return true;
                    }
                }
            },

            {
                type: 'input',
                name: 'email',
                message: 'Please enter the team manager\'s email address:',
                validate: email => {
                    valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log('Please enter a valid email address.')
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'office',
                message: 'Please enter in the manager\'s office number:',
                validate: officeInput => {
                    if (isNaN(officeInput)) {
                        console.log('Please enter a valid office number.');
                        return false;
                    } else {
                        return true;
                    }
                }
            },

        ])
        .then(managerInfo => {
            const { name, id, email, office } = managerInfo;
            const manager = new Manager(name, id, email, office);

            teamArray.push(manager);
            console.log(manager);

        })
};



//function for engineer and intern
const addTeamMember = () => {
    inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'role',
                message: 'Please select the team member\'s role:',
                choices: ['Engineer', 'Intern']
            },

            {
                type: 'input',
                name: 'name',
                message: 'Please enter the team member\'s name:',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the team member\'s name.');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'id',
                message: 'Please enter the team member\'s employee ID:',
                validate: idInput => {
                    if (isNaN(idInput)) {
                        console.log('Please enter the team member\'s employee ID.');
                        return false;
                    } else {
                        return true;
                    }
                }
            },

            {
                type: 'input',
                name: 'email',
                message: 'Please enter the team member\'s email address:',
                validate: email => {
                    valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log('Please enter a valid email address.')
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'github',
                message: 'Please enter in the engineer\'s github username:',
                when: (input) => input.role === 'Engineer',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter the engineer\'s gibhub username.');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'school',
                message: 'Please enter in the intern\'s school name:',
                when: (input) => input.role === 'Intern',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter the intern\'s school name.');
                        return false;
                    }
                }
            },

            {
                type: 'confirm',
                name: 'additionalMembers',
                message: 'Would you like to add any other team members?',
                default: false
            }
        ])

        .then(employeeInfo => {
            let { name, id, email, role, github, school, additionalMembers } = employeeInfo;
            let employee;

            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            }

            teamArray.push(employee);

            if (additionalMembers) {
                return addTeamMember(teamArray);
            } else {
                return teamArray;
            }
        })

}
//function to generate HTML page with file system
const writeFileSync = data => {
    fs.writeFileSync //unsure of text inside



    //if an error occurs
    if (err) {
        console.log(err);
        return;
        //if there is no error
    } else {
        console.log('Your team profile has been successfully created! Your information can be found in the `index.html` file.')
    }
};

// Function call 
// generateHtml();
addManager();
addTeamMember();

