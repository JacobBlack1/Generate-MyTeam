const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "manager";
    }
    getOfficeNumber() {
        return this.getOfficeNumber;
    }
}
module.exports = Manager;