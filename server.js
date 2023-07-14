  //Importing all installs needed for app
const mysql = require ('mysql2')
const inquirer = require ('inquirer')
const consoleTab = require ('console.table')

require('dotenv').config()

// Connecting to DATABASE
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Rocky246!',
    database : 'employee_db'
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log('Connected to employee_db');
    afterConnection();
  });

 
  afterConnection = () => {
    promptUser();
  };

// User is prompted with folders to open up and view
  const promptUser = () => 
    inquirer.prompt ([
      {
        type: 'list',
        name: 'choices', 
        message: 'What would you like to do?',
        choices: ['View all departments', 
                  'View all roles', 
                  'View all employees', 
                  'Add a department', 
                  'Add a role', 
                  'Add an employee', 
                  'Update an employee role']
                }
              ]) .then((answers) => {
                const { choices } = answers; 
          
                if (choices === "View all departments") {
                  showDepartments();
                }
          
                if (choices === "View all roles") {
                  showRoles();
                }
          
                if (choices === "View all employees") {
                  showEmployees();
                }
          
                if (choices === "Add a department") {
                  addDepartment();
                }
          
                if (choices === "Add a role") {
                  addRole();
                }
          
                if (choices === "Add an employee") {
                  addEmployee();
                }
          
                if (choices === "Update an employee role") {
                  updateEmployee();
                }
              });


                //Allows user to go into the tables

              showDepartments = () => {
                console.log('Showing all departments...\n');
                const sql = `SELECT department.id AS id, department.name AS department FROM department`; 
              
              
                connection.query(sql, (err, rows) => {
                  if (err) throw err;
                  console.table(rows);
                  promptUser();
                });
              };


              showRoles = () => {
                console.log('Showing all roles...\n');
                const sql = `SELECT role.id AS id, role.name AS role FROM role`; 
              
              
                connection.query(sql, (err, rows) => {
                  if (err) throw err;
                  console.table(rows);
                  promptUser();
                });
              };
           
      
      
      
               
              showEmployees = () => {
                console.log('Showing all employees...\n');
                const sql = `SELECT employee.id AS id, employee.name AS employee FROM employee`; 
              
              
                connection.query(sql, (err, rows) => {
                  if (err) throw err;
                  console.table(rows);
                  promptUser();
                });
              };
              