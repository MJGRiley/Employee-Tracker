class Employee { 
    constructor(id, first_name, last_name, role_id, manager_id){
        this.id = id //Will this auto populate with the AUTO_INCREMENT in schema.sql?
        this.fName = first_name 
        this.lName = last_name
        this.role = role_id
        this.manager = manager_id
    }
    
    getID() {
        return this.id
    }

    getName() { //returns properties
        return `${this.lName}, ${this.fName}`
    }

    getRole() {
        return 'Employee'
    }

    getManager() {
        return this.manager
    }
}

module.exports = Employee