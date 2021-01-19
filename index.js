//dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");

//an empty array that holds all the employee info
const finalArray = [];

//function that prompts questions for entering an employee
const enterEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your employee's name.");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "id",
        message: "What is your employee's id?",
        validate: (id) => {
          if (id === Number && id) {
            return true;
          } else {
            console.log("Please enter your employee's id in numeric form");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your Employee's email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your employee's email.");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "role",
        message: "What is this employee's role?",
        choices: ["Manager", "Eningeer", "Intern"],
      },
      //engineer prompt
      {
        type: "input",
        name: "github",
        message: "Please enter github username for this employee.",
        when: answers => answers.role === "Engineer",
      },
      //intern prompt
      {
        type: "input",
        name: "school",
        message: "What school did this employee go to?",
        when: answers => answers.role === "Intern",
      },
      //manager prompt question
      {
        type: "number",
        name: "officeNumber",
        message: `What is employee's office number?`,
        when: answers => answers.role === "Manager"
        },
    ])
    .then((answers) => {
      if (answers.role === "Engineer")  {
          const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
          );
          finalArray.push(eningeer);
      } else if (answers.role === "Intern") {
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
          );
          finalArray.push(manager);
      } else if (answers.role === "Manager") {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
          );
          finalArray.push(manager);
      };

      // ask user if they would like to use another employee
      inquirer
        .prompt({
          type: "confirm",
          name: "addAnotherEmployee",
          message: "Would you like to add another employee?",
          default: false,
        })
        .then(({ addAnotherEmployee }) => {
          if (!addAnotherEmployee) {
            console.log("Thank you, your employee has been sucessfully added.");
            createCard(finalArray);
          } else {
            enterEmployee();
          }
        });
    });
};

//function that gets right info to put on the employee's card according to what role they are
const roleInfo = (employee) => {
  switch (employee.getRole()) {
    case "Intern":
      return `School: ${employee.getSchool()}`;
    case "Eningeer":
      return `Github: ${employee.getGithub()}`;
    case "Manager":
      return `Office number: ${employee.getOfficeNumber()}`;
  }
};

//function that will call the methods in appropriate places in order to create a card for each employee
const createCard = (employees) => {
  //create an empty array to store the card info in
  const cardArray = [];
  //for each employee create a card
  employees.forEach((employee) => {
    const employeeCard = `
        <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">${employee.getName()}</div>
                <div class="card-body">
                    <h5 class="card-title">${employee.getRole()}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href ="mailto: ${employee.getEmail()}">${employee.getEmail()}</li>
                            <li class="list-group-item">${roleInfo}</li>
                        </ul>
                </div>
            </div>
        </div>
    `;
    //and push this card to the card array
    cardArray.push(employeeCard);
    //us fs to write the file
    generateHTML(cardArray);
  });
};

const generateHTML = cardArray => {
  fs.copyFile("./src/template.html", "./dist/index.html", (err) => {
    if (err) throw err;
  });

  fs.appendFile("");
};

enterEmployee();
