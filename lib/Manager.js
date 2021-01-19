//dependencies 
const Employee = require('./Employee.js');

//class constructor and methods

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return `<i class="fas fa-mug-hot"></i> Manager`;
    }
};

module.exports = Manager;