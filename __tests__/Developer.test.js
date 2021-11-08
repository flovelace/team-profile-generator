const Developer= require('../lib/Developer');

test('creates a dev object', () => {
    const developer = new Developer('Guybrush Threepwood', 1, 'guybrush@lucrebank.com', 'guyhub123');

    expect(developer.name).toBe('Guybrush Threepwood');
    expect(developer.id).toEqual(expect.any(Number));
    expect(developer.email).toBe('guybrush@lucrebank.com');
    expect(developer.github).toBe('guyhub123');
});