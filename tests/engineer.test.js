
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
   
     // Testing get name
    it('test getName', () => {
        const name = "Bryan";
        const engineer = new Engineer(name);
        expect(engineer.getName()).toBe(name);

    });

    // Testing get id
    it('test getId', () => {
        const id = "001";
        const engineer = new Engineer("Bryan", id);
        expect(engineer.getId()).toBe(id)

    });

    // Testing get email
    it('test getEmail', () => {
        const email = "bksayavong@gmail.com";
        const engineer = new Engineer("Bryan", "001", email);
        expect(engineer.getEmail()).toBe(email);
    });

    // Testing get role
    it('test get role', () => {
        const role = 'Engineer';
        const engineer = new Engineer("Bryan", "001", "bksayavong@gmail.com", role)
        expect(engineer.getRole()).toBe(role);

    });
    // Testing get github
    it('test getGithub', () => {
        const github = "stephenfudge";
        const engineer = new Engineer("Bryan", "001", "Bksayavong@gmail.com", github);
        expect(engineer.getGithub()).toBe(github);
    });
});