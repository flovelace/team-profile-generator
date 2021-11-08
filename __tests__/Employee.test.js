const Employee = require('../lib/Employee.js')

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
})

test('creates an employee object', () => {
    const employee = new Employee('Guybrush Threepwood', 1, 'guybrush@lucrebank.com', 'guyhub123');

    expect(employee.name).toBe('Guybrush Threepwood');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('guybrush@lucrebank.com');

});