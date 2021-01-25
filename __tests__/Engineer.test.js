const Engineer = require('../lib/Engineer')

test('create a new engineer', () => {
    const engineer = new Engineer('Alexandra', 1, 'akelstrom@gmail.com','akelstrom')

    expect(engineer.name).toBe('Alexandra')
    expect(engineer.id).toBe(1)
    expect(engineer.email).toBe('akelstrom@gmail.com')
    expect(engineer.github).toBe('akelstrom')

})

test('return values from engineer class', () => {
    const engineer = new Engineer('Alexandra', 1, 'akelstrom@gmail.com', 'akelstrom')

    expect(engineer.getName()).toBe('Alexandra')
    expect(engineer.getId()).toBe(1)
    expect(engineer.getEmail()).toBe('akelstrom@gmail.com')
    expect(engineer.getGithub()).toBe('akelstrom')
})