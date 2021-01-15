//dependencies
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

//an empty array that holds all the employee info
const employeeDirectory = [];

const init = () => {
    enterEmployee();
}

//entering an employee.
const enterEmployee = () => {
   new Employee().getName();
   new Employee().getEmail();
   new Employee().getId();
   new Employee().getRole();
    
    if (role === 'Engineer') {
        Engineer.getGithub();
    } else if (role === 'Intern') {
        Intern.getSchool();
    } else if (role === 'Manager') {
        Manager.getOfficeNumber();
    } else {
        return 'Employee';
    }
    newEmployeePrompt();
};

//would you like to enter a new employee?
const newEmployeePrompt = () => {
    inquirer.prompt({
        type: 'confirm',
        name: 'newEmployeeConfirm',
        message: 'Would you like to enter another employee?',
        default: false
    })
    .then((confirmPrompt) => {
        if (confirmPrompt) {
            enterEmployee();
            return true;
        } else {
            return false;
        }
    });
};

init();