const inquirer = require("inquirer");
const Employee = require ("./lib/Employee");
const Engineer = require ("./lib/Engineer");
const Manager = require ("./lib/Manager");
const Intern = require ("./lib/Intern");



//
// const bob = new Employee("bob", 11, "bob@mail.com")
// const tina = new Engineer("tina", 1, "tina@mail.com", "awesometina")
// console.log(bob.getRole())
// console.log(tina.getGithub())