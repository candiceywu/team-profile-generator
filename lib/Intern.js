// TODO: Import the parent class
const Employee = require('./Employee');

// TODO: Create an `Intern` class that extends the `Employee` class
class Intern extends Employee {
    constructor(name, id, email, school) { //gets everything from Employee class, plus school
        super(name, id, email);
        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern";
    };
};


module.exports = Intern;

