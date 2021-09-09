// TODO: Import the parent class
const Employee = require('./Employee');

// TODO: Create an `Engineer` class that extends the `Employee` class
class Engineer extends Employee {
    constructor(name, id, email, github) { //gets everything from Employee class plus github info
        super(name, id, email);
        this.github = github;
    };

    //github username
    getGithub() {
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
};

module.exports = Engineer;