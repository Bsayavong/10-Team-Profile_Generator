// calls the intern.js file to test
const Intern = require("../lib/Intern");

// creating the testing suite
describe("Intern", () => {

    // Testing get name
    it('testing getName', () => {
        const name = "Bryan";
        const intern = new Intern(name);
        expect(intern.getName()).toBe(name);

    });

    // Testing get id
    it('testing getId', () => {
        const id = "001";
        const intern = new Intern("Bryan", id);
        expect(intern.getId()).toBe(id)

    });

    // Testing get email
    it('testing getEmail', () => {
        const email = "bksayavong@gmail.com";
        const intern = new Intern("Bryan", "001", email);
        expect(intern.getEmail()).toBe(email);
    });

    // Testing get role
    it('testing getRole', () => {
        const role = 'Intern';
        const intern = new Intern("Bryan", "001", "bksayavong@gmail.com", role)
        expect(intern.getRole()).toBe(role);

    });

    // Testing get school
    it('testing getSchool', () => {
        const school = "U of T";
        const intern = new Intern("Bryan", "001", "bksayavong@gmail.com", school);
        expect(intern.getSchool()).toBe(school);
    });

});