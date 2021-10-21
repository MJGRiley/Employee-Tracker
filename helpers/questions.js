const initQ = [ //asks user What do you want to do?
    {
    type: 'list',
    message: 'What do you want to do?',
    name: 'wdywtd',
    choices: [
        'View All Employees (sort by)',
        'Add Employee',
        'Remove Employee',
        'Update Employee Role',
        'Update Employee Manager',
        'View Total Utilized Budget By Department',
        'Quit'
    ]
    },
]

const viewByQ = [
    {
    type: 'list',
    message: 'Sort employees by...',
    name: 'viewBy',
    choices: [
        'Department',
        'Manager',
        'Want to do something else?'
    ]
    },
]

const empQs = [
    {
        type: 'input',
        message: 'Enter New Employee\'s First Name',
        name: 'fName',
    },{
        type: 'input',
        message: 'Enter New Employee\'s Last Name',
        name: 'lName',
    },{
        type: 'list',
        message: 'Employee\'s Role',
        name: 'role',
        choices: [
            'Sales Lead',
            'Sales Person',
            'Lead Engineer',
            'Software Engineer',
            'Account Manager',
            'Accountant',
            'Lawyer',
            'Legal Team Lead'
        ]
        },{
        type: 'input',
        message: 'Employee\'s Manager\'s ID',
        name: 'manager',
        }
]

const uRoleQs = [
    {
        type: 'input',
        message: 'Which Employee(by ID)?',
        name: 'id',
    },{
        type: 'list',
        message: 'Employee\'s New Role?',
        name: 'role',
        choices: [
            'Sales Lead',
            'Sales Person',
            'Lead Engineer',
            'Software Engineer',
            'Account Manager',
            'Accountant',
            'Lawyer',
            'Legal Team Lead'
        ]
    }
]

module.exports = {initQ,viewByQ,empQs,uRoleQs}