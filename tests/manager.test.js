const Manager = require('../lib/manager');

 // testing get name
it('test getName', () => {
    const name = "Bryan";
    const manager = new Manager(name);
    expect(manager.getName()).toBe(name);

});

 // testing get id
it('test getId', () => {
    const id = "001";
    const manager = new Manager("Bryan", id);
    expect(manager.getId()).toBe(id)

});

 // testing get email
it('test getEmail', () => {
    const email = "bksayavong@gmail.com";
    const manager = new Manager("Bryan", "001", email);
    expect(manager.getEmail()).toBe(email);
});

 // testing get role
it('test getRole', () => {
    const role = 'Manager';
    const manager = new Manager("Bryan", "001", "bksayavongn@gmail.com", role)
    expect(manager.getRole()).toBe(role);

});

 // testing get office number
it('test getOfficeNumber', () => {
    const officeNumber = "bryansayavong";
    const manager = new Manager("Bryan", "001", "bksayavong@gmail.com", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});