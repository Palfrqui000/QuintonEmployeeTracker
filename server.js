//Importing all installs needed for app
const mysql = require ('mysql2')
const inquirer = require ('inquirer')
const consoleTab = require ('console.table')


// Connecting to DATABASE
var connection = mysql.createConnection({
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

// User is promted with folders to open up and view
  const promptUser = () => {
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
    ])

  }
 
 
 