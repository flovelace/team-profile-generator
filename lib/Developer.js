const Employee = require("./Employee");

class Developer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getRole() {
        return `Developer`
    }

}
module.exports = Developer