const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001

})

connection.connect(function(err){
    if (err) throw err;
    options();
})

function options() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Welcome to your employee database! What action would you like to take?',
            choices: [
                    'View All Employees',
                    'View All Departments',
                    'View All Roles',
                    'Add Employee',
                    'Add Department',
                    'Add Role',
                    'Update Employee Role',
                    'Delete An Employee',
                    'QUIT',
            ]
        }).then(function (answer) {
            switch (answer.action) {
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Update Employee Role':
                    updateRole();
                    break;
                case 'Delete An Employee':
                    deleteEmployee();
                    break;
                case 'QUIT':
                    exitApp();
                    break;
                default:
                    break;
            }
        })
};

function viewEmployees() {
    var query = 'SELECT * FROM employee';
    connection.query(query, function(err, res){
        if (err) throw err;
        console.log(res.length + ' employees found!');
        console.table('All Employees:', res);
        options();
    })
};

