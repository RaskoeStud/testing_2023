const Employee =  require('./employee.js');
let employee;


describe('employee', () => {
    beforeAll(() => {
        console.log('Test employee');
    });

    beforeEach(() => {
        employee = new Employee("1234567890", "John", "Doe", "IT", 30000, 3, new Date(1990, 1, 1), new Date(2010, 1, 1), "Denmark");
    });

    it('CPR must be ten digits long, and must contain no letters or signs', () => {
        expect(employee).toBeInstanceOf(Employee);
        
        expect(employee.cpr).toBe("1234567890");
        expect(employee.cpr).toHaveLength(10);
        
        expect(typeof employee.cpr).toEqual("string");

        expect(employee.cpr).not.toHaveLength(9);
        expect(employee.cpr).not.toHaveLength(11);

        expect(typeof employee.cpr).not.toEqual("integer");
    });

    it('First name must be between 1 and 30 characters long, alphabetic and can contain dashes', () => {
        expect(employee.firstName).toBe("John");
        expect(employee.firstName).toHaveLength(4);

        expect(employee.firstName).toMatch(/^[A-Za-z -]{1,30}$/);

        expect(employee.firstName).not.toHaveLength(0);
        expect(employee.firstName).not.toHaveLength(31);

        expect(typeof employee.firstName).not.toMatch(/^\d$/);
    });

    it('Last name must be between 1 and 30 characters long, alphabetic and can contain dashes', () => {
        expect(employee.lastName).toBe("Doe");
        expect(employee.lastName).toHaveLength(3);

        expect(employee.lastName).toMatch(/^[A-Za-z -]{1,30}$/);

        expect(employee.lastName).not.toHaveLength(0);
        expect(employee.lastName).not.toHaveLength(31);

        expect(typeof employee.lastName).not.toMatch(/^\d$/);
    });

    it('Department must be one of: HR, Finance, IT, Sales, General Services', () => {
        expect(employee.department).toBe("IT");

        expect(employee.department).toMatch(/^(HR|Finance|IT|Sales|General Services)$/);

        expect(employee.department).not.toMatch(/^(HR|Finance|IT|Sales|General Services|Marketing)$/);

        expect(typeof employee.department).not.toMatch(/^\d$/);
    });

    it('Salary must be a positive integer', () => {
        expect(employee.baseSalary).toBe(30000);

        expect(employee.baseSalary).toBeGreaterThan(0);

        expect(typeof employee.baseSalary).not.toMatch(/^[A-Za-z -]$/);
    });

    it('Birthday must be a valid date', () => {
        expect(employee.dateOfBirth).toBeInstanceOf(Date);

        expect(employee.dateOfBirth).toBeLessThan(new Date());

        expect(employee.dateOfBirth).not.toBeGreaterThan(new Date());
    });

    it('Employment date must be a valid date', () => {
        expect(employee.dateOfEmployment).toBeInstanceOf(Date);

        expect(employee.dateOfEmployment).toBeLessThan(new Date());

        expect(employee.dateOfEmployment).not.toBeGreaterThan(new Date());
    });

    it('Country must be a string and contain no numbers or signs', () => {
        expect(employee.country).toBe("Denmark");

        expect(typeof employee.country).toBe("string");

        expect(employee.country).not.toMatch(/^\d$/);
    });

    it('Discount must be a positive integer', () => {
        expect(employee.discount).toBe(15);

        expect(employee.discount).toBeGreaterThan(0);

        expect(typeof employee.discount).not.toMatch(/^[A-Za-z -]$/);

        employee.setDateOfBirth(new Date(1980, 1, 1));
        employee.setDateOfEmployment(new Date(2015, 1, 1));

        expect(employee.discount).toBe(10);
    });
});

        




