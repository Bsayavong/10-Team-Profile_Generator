const Employee = require("../lib/Employee");

// Create test suite for Employee
describe("Employee", () => {
    
    // Testing get name
    it('testing  getName', () => {
        const name = "Bryan";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);

    });

     // Testing get id
    it('testing getId', () => {
        const id = "001";
        const employee = new Employee("Bryan", id);
        expect(employee.getId()).toBe(id)

    });

    // Testing get email
    it('testing getEmail', () => {
        const email = "bksayavong@gmail.com";
        const employee = new Employee("Bryan", "001", email);
        expect(employee.getEmail()).toBe(email);
    });

     // Testing get role
    it('testing getRole', () => {
        const role = 'Employee';
        const employee = new Employee("Bryan", "001", "bksayavong@gmail.com", role)
        expect(employee.getRole()).toBe(role);

    });

});