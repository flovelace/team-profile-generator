const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Chris Lightfellow', 1, 'chris@brasscastle.net', 'i didnt go to school...');

    expect(intern.name).toBe('Chris Lightfellow');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('chris@brasscastle.net');
    expect(intern.collegeUniversity).toBe('i didnt go to school...');
});