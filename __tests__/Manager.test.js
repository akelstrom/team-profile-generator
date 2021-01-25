const Manager = require('../lib/Manager');

test('create a new Manager', () => {
    const manager = new Manager('Alexandra', 1, 'akelstrom@gmail.com', 13)

    expect(manager.name).toBe('Alexandra')
    expect(manager.id).toBe(1)
    expect(manager.email).toBe('akelstrom@gmail.com')
    expect(manager.officeNumber).toBe(13)

})

test('return values from manager class', () => {
    const manager = new Manager('Alexandra', 1, 'akelstrom@gmail.com', 13)

    expect(manager.getName()).toBe('Alexandra')
    expect(manager.getId()).toBe(1)
    expect(manager.getEmail()).toBe('akelstrom@gmail.com')
    expect(manager.getOfficeNumber()).toBe(13)
})