INSERT INTO department (name, department_id)
VALUES 
('Finished Goods, 1'),
('Aaray, 2'),
('Machine Repair, 3'),
('Quality Check, 4');


INSERT INTO role (title, department, salary)
VALUES
('Tech 1, 1, 40000'),
('Inspector, 1, 47000'),
('Tech 2, 2, 42500'),
('Supervisor, 2, 53000'),
('Tech, 3, 56000'),
('Operator, 4, 46500'),
('Lab Tech, 4, 60000');


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jason, Mendoza, 1, 1'),
('Sara, Johnson, 1, null'),
('Jake, Lopez, 2, null'),
('Peter, Tate, 2, 2'),
('Maria, Davis, 3, 3'),
('Kayla, Gomez, 3, null'),
('Pat, Lemon, 4, null'),
('Dax, Thurmon, 4, 4');


