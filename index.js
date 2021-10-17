const inquire = require('inquirer')
const MySQL2 = require('mysql2')
const cTable = require('console.table')
const Employee = require('./lib/Employee')

// TODO:
//connects to the employee database
// const empDB = MySQL2.createConnection(
//     {
//       host: 'localhost',
//       // MySQL username,
//       user: 'root',
//       // MySQL password
//       password: '1234gRoot',
//       database: 'employee_db'
//     },
//     console.log(`Connected to the employee database.`)
// );

// TODO:console.log(appTitle())

function whatToDo() {
    const initQ = [ //What do you want to do?
        {
        type: 'list',
        message: 'What do you want to do?',
        name: 'wdywtd',
        choices: [
            'View All Employees',
            'View All Employees By Department',
            'View All Employees By Manager',
            'Add Employee',
            'Remove Employee',
            'Update Employee Role',
            'Update Employee Salary',
            'Update Employee Manager',
            'View Total Utilized Budget By Department',
            'Quit'
        ]
        },
    ]
    inquire
    .prompt(initQ)
    .then((answers) => {
      initQ[0].choices.forEach((choice,index)=>{
        const initAs = [
          displayEmployees,
          dispByDept,
          dispByMgr,
          addEmployee,
          removeEmployee,
          updateRole,
          //updateSal,
          updateMgr,
          viewBudgetByDept,
          allDone
        ]
        if (answers.wdywtd == choice) {console.log(`${initAs[index]}()`) 
    }  
    })
})
}
whatToDo()

function appTitle() {
  return `sup`
}
  
function displayEmployees() {
    console.log('View All Employees')
    // console.table('All Employees',empDB)
  whatToDo()
}

function dispByDept() {
    console.log('View All By Department')
    whatToDo()
}

function dispByMgr() {
    console.log('View All Employees By Manager')
    whatToDo()
}

function addEmployee() {
    console.log('Add Employee')
    whatToDo()
}

function removeEmployee() {
    console.log('Remove Employee')
    whatToDo()
}

function updateRole() {
    console.log('Update Employee\'s Role')
    whatToDo()
}

function updateMgr() {
    console.log('Update Employee\'s Manager')
    whatToDo()
}

function viewBudgetByDept() {
    console.log('View Total Utilized Budget By Department')
    whatToDo()
}

function allDone() {
    console.log('Quit')
    whatToDo()
}