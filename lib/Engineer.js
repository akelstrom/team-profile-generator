//dependencies
const Employee = require('./Employee.js');

//class constuctor and method
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //extended from Employee
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return `<i class="fas fa-glasses"></i> Engineer`;
    }

};

module.exports = Engineer;