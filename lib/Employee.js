//dependencies (ES6)
const inquirer = require('inquirer');

//set up class constructors and methods for Employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    Employee.prototype.getName = function() {
        inquirer
        .prompt({
                type: 'input',
                name: 'name',
                message: 'What is your employee\'s name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your employee\'s name.');
                        return false;
                    }
                }
            })
        .then(({name})  => {
            this.employee = new Employee(name);
        });
    }

    Employee.prototype.getId = function() {
        prompt({
            type: 'input',
            name: 'id',
            message: 'What is your employee\'s id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your employee\'s id');
                    return false;
                }
            }
        })
        .then(({id}) => {
            this.id = new Employee(id);
        });
    }

    Employee.prototype.getEmail = function() {
        prompt({
            type: 'input',
            name: 'email',
            message: 'What is your Employee\'s email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your employee\'s email.');
                    return false;
                }
            }
        })
        .then(({email}) => {
            this.email = new Employee(email);
        })
    }
    
    Employee.prototype.getRole = function() {
     const role = inquirer
      .prompt({
          type: 'list',
          name: 'role'
      })
    }
    }
}

module.exports = Employee;