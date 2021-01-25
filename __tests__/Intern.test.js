const Intern = require('../lib/Intern');

test('create a new Intern', () => {
    const intern = new Intern('Alexandra', 1, 'akelstrom@gmail.com','depaul')

    expect(intern.name).toBe('Alexandra')
    expect(intern.id).toBe(1)
    expect(intern.email).toBe('akelstrom@gmail.com')
    expect(intern.school).toBe('depaul')

})

test('return values from intern class', () => {
    const intern = new Intern('Alexandra', 1, 'akelstrom@gmail.com', 'depaul')

    expect(intern.getName()).toBe('Alexandra')
    expect(intern.getId()).toBe(1)
    expect(intern.getEmail()).toBe('akelstrom@gmail.com')
    expect(intern.getSchool()).toBe('depaul')
})