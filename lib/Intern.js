//dependencies 
const inquirer = require('inquirer');
const Employee = require('./Employee.js');

//constructor class for Intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        //extended from Employee
        super(name, id, email);
        this.school = school;

    Intern.prototype.getSchool = function() {
        inquirer
        .prompt({
            type: 'input',
            name: 'school',
            message: `What school did ${this.name} go to?`,
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the school this employee went to.');
                    return false;
                }
            }
        })
        .then(({school}) => {
            this.school = new Intern(school);
        });
    }

    }
}

module.exports = Intern;