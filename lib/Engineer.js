//dependencies
const Employee = require('./Employee.js');
const inquirer = require('inquirer')

//class constuctor and method
class Engineer extends Employee {
    constructor(name, id, email, github){
        //extended from Employee
        super(name, id, email);
        this.github = github;

//use inquirer to get the github info for this method
Engineer.prototype.getGithub = function() {
    inquirer
    .prompt({
        type: 'input',
        name: 'github',
        message: `Please enter github username for ${this.Employee}.`,
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter the github username for this employee.');
                return false;
            }
        }
    })
    .then(({github}) => {
        this.github = new Engineer(github);
    });
}
    }
}

module.exports = Engineer;