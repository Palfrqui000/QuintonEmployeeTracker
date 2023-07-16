User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business


Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

Getting starated

First user has to download all necissary packages. First package was npm install.
Second user has to download inquirer@8.2.4
Third user has to download mydql2 by running npm i mysql2
Lastly user has to download conole-table by running npm i cosole-table

Usage

The purpose of this file is to view work departments and accesing the tables to view the employees and salarys. 

To run the file in the terminal you have to first login to mysql and run the schema.sql file
Then user needs to run node server to pull up the the choices to be selcted
THen user can access the tables for the given database

Video Link: https://drive.google.com/file/d/1LHYBg761nRhK5u8yexMlm4dBZMmEnLkc/view