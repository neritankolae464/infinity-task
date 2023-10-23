/* File Name: ComplexCode.js 
   Purpose: Demonstration of a complex JavaScript code */
   
// Importing external library
const moment = require('moment');

// Class definition for Employee
class Employee {
  constructor(name, age, designation) {
    this.name = name;
    this.age = age;
    this.designation = designation;
  }
}

// Creating an instance of Employee
const employee1 = new Employee("John Doe", 30, "Manager");
const employee2 = new Employee("Jane Smith", 25, "Developer");

// Function to calculate the average age of employees
function calculateAverageAge(employees) {
  let totalAge = 0;
  for(let employee of employees) {
    totalAge += employee.age;
  }
  return totalAge / employees.length;
}

// Array of employees
const employees = [employee1, employee2, new Employee("Mark Johnson", 28, "Designer")];

// Calculating average age of employees
const averageAge = calculateAverageAge(employees);

// Logging the average age
console.log(`Average Age: ${averageAge}`);

// Function to generate random employee ID
function generateEmployeeId() {
  const prefix = "EMP";
  const randomSuffix = Math.floor(Math.random() * 10000);
  return `${prefix}-${randomSuffix}`;
}

// Object representing a department
const department = {
  name: "Engineering",
  head: employee1,
  employees: employees,
  toString: function() {
    return `Department: ${this.name}, Head: ${this.head.name}, Total Employees: ${this.employees.length}`;
  }
}

// Logging the department details
console.log(department.toString());

// Function to get current date and time
function getCurrentDateTime() {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}

// Logging current date and time
console.log(`Current Date and Time: ${getCurrentDateTime()}`);

// Exporting functions and objects
module.exports = { 
  employees,
  department,
  generateEmployeeId,
  getCurrentDateTime
};