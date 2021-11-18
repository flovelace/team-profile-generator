const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, collegeUniversity) {
        super(name, id, email)
        this.collegeUniversity = collegeUniversity
    }
    getRole() {
        return `Intern`
    }
}

module.exports = Intern;