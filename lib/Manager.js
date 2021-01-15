//dependencies 
const inquirer = require('inquirer');
const Employee = require('./Employee.js');

//class constructor and methods

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

    Manager.prototype.getOfficeNumber = function() {
        inquirer
        .prompt({
            type: 'number',
            name: 'officeNumber',
            message: `What is ${this.name}'s office number?`,
            validate: officeNumberInput => {
                if(officeNumberInput === Number & officeNumberInput) {
                    return true;
                } else {
                    console.log('Please make sure your entry is a number');
                    return false;
                }
            }
        })
        .then(({officeNumber}) => {
            this.officeNumber = new Manager(officeNumber);
        });
    }

    }
}

module.exports = Manager;