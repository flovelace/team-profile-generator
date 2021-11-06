const Employee = require('../lib/Employee.js')

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('null')
})