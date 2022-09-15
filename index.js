// variables that I created to all up upon later
const inquirer = require ('inquirer');
const fs = require('fs');

// Where the file path is for each postion/role
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Location where the html will be rendered from
const renderSite = require("./utils/renderSite");


const teamArray = [];

function startQuestions() {
    managerQuestions();
}

function managerQuestions() {
    inquirer
     .prompt([{
        type: "input",
        message: "Name of the Manager?",
        name: "name"
     }, {
        type: "input",
        message: "ID number assigned to Manager",
        name: "id"
     }, {
        type: "input",
        message: "What is the Manager's email address?",
        name: "email"
     }, {
        type: "input",
        message: "What is the Manager's office number?",
        name: "officeNumber"
    }])
    .then((info) => {
        const manager = new Manager(
            info.name,
            info.id,
            info.email,
            info.officeNumber
        );
        console.log(manager);
        teamArray.push(manager);
        addNewMember();
    });
}

function addNewMember() {
    inquirer
      .prompt([{
            type: "list",
            message: "Please for the following - an engineer, an intern or are you finished building the team?",
            choices: ["Engineer", "Intern", "Finished"],
            name: "role"
        }, ])
        .then((info) => {
        if (info.role === "Engineer") {
            engineerQuestions();
        } else if (info.role === "Intern") {
            internQuestions();
        } else {
            createHTML();
        }
    });
  }
  
  function engineerQuestions() {
    inquirer
      .prompt([{
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        }, {
            type: "input",
            message: "What is the Engineer's ID number?",
            name: "id"
        }, {
            type: "input",
            message: "What is the Engineer's email address? ",
            name: "email"
        }, {
            type: "input",
            message: "What is the Engineer's GitHub Username?",
            name: "github"
        }, ])
        .then((info) => {
        const engineer = new Engineer(info.name, info.id, info.email, info.github);
        console.log(engineer);
        teamArray.push(engineer);
        addNewMember();
    });
  }
  
  function internQuestions() {
    inquirer
      .prompt([{
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        }, {
            type: "input",
            message: "What is the Intern's ID number?",
            name: "id"
        }, {
            type: "input",
            message: "What is the Intern's email address? ",
            name: "email"
        }, {
            type: "input",
            message: "What school does the Intern attend?",
            name: "school"
        }, ])
        .then((info) => {
        const intern = new Intern(info.name, info.id, info.email, info.school);
        console.log(intern)
        teamArray.push(intern);
        addNewMember();
    });
  }
  
  
  startQuestions();
  
  
  function createHTML() {
    fs.writeFile('./dist/index.html', renderSite(teamArray),
      (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  
  }