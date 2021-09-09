// TODO: Import the parent class
const Employee = require('./Employee');

// TODO: Create an `Manager` class that extends the `Employee` class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) { //returns everything from Employee class, plus officeNumber
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };
};

module.exports = Manager;
