const Manager= require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Geralt of Rivia', 1, 'geralt@kaermorhen.pl', 666);

    expect(manager.name).toBe('Geralt of Rivia');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('geralt@kaermorhen.pl');
    expect(manager.office).toEqual(expect.any(Number));
});