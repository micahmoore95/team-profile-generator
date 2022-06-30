const Employee = require('./Employee');

class Manager extends Employee {
    constructor(office, name, ID, email) {
        super(name, ID, email);
        this.office = office;
        
    }
    getRole() {
        return "💼 Manager"
    }
}

module.exports = Manager