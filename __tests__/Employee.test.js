const Employee = require('../lib/Employee')

test('create a new employee', () => {
    const employee = new Employee('Alexandra', 1, 'akelstrom@gmail.com')

    expect(employee.name).toBe('Alexandra')
    expect(employee.id).toBe(1)
    expect(employee.email).toBe('akelstrom@gmail.com')
})

test('return values from Employee class', () => {
    const employee = new Employee('Alexandra', 1, 'akelstrom@gmail.com')

    expect(employee.getName()).toBe('Alexandra')
    expect(employee.getId()).toBe(1)
    expect(employee.getEmail()).toBe('akelstrom@gmail.com')
})