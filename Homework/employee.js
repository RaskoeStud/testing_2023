class Employee {
    #cpr;
    #firstName;
    #lastName;
    #department;
    #baseSalary;
    #educationLevel;
    #dateOfBirth;
    #dateOfEmployment;
    #country;

    constructor(cpr, firstName, lastName, department, baseSalary, educationLevel, dateOfBirth, dateOfEmployment, country) {
        this.setCpr(cpr);
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setDepartment(department);
        this.setBaseSalary(baseSalary);
        this.setEducationLevel(educationLevel);
        this.setDateOfBirth(dateOfBirth);
        this.setDateOfEmployment(dateOfEmployment);
        this.setCountry(country);
        }
    
    // Getters
    get cpr() {
    return this.#cpr;
    }

    get firstName() {
    return this.#firstName;
    }

    get lastName() {
    return this.#lastName;
    }

    get department() {
    return this.#department;
    }

    get baseSalary() {
    return this.#baseSalary;
    }

    get educationLevel() {
    const educationLevels = ["none", "primary", "secondary", "tertiary"];
    return educationLevels[this.#educationLevel];
    }

    get salary() {

    return this.#baseSalary + (this.#educationLevel * 1220);
    }

    get dateOfBirth() {
    return this.#dateOfBirth;
    }

    get dateOfEmployment() {
    return this.#dateOfEmployment;
    }

    get country() {
    return this.#country;
    }

    get discount() {
    return (this.#dateOfEmployment.getFullYear() - new Date().getFullYear()) * 0.5;
    }

    get shippingCost() {
    if (this.#country === "Denmark" || this.#country === "Norway" || this.#country === "Sweden") {
        return 0;
    } else if (this.#country === "Iceland" || this.#country === "Finland") {
        return 50;
    } else {
        return 100;
    }
    }

    // Setters
    setCpr(cpr) {
    if (/^\d{10}$/.test(cpr)) {
        this.#cpr = cpr;
    } else {
        throw new Error("CPR must be 10 digits");
    }
    }

    setFirstName(firstName) {
    if (/^[A-Za-z -]{1,30}$/.test(firstName)) {
        this.#firstName = firstName;
    } else {
        throw new Error('Invalid first name. It must be 1 to 30 characters, alphabetic, spaces, or a dash.');
    }
    }

    setLastName(lastName) {
    if (/^[A-Za-z -]{1,30}$/.test(lastName)) {
        this.#lastName = lastName;
    } else {
        throw new Error('Invalid last name. It must be 1 to 30 characters, alphabetic, spaces, or a dash.');
    }
    }

    setDepartment(department) {
    const validDepartments = ['HR', 'Finance', 'IT', 'Sales', 'General Services'];
    if (validDepartments.includes(department)) {
        this.#department = department;
    } else {
        throw new Error('Invalid department. It must be one of: HR, Finance, IT, Sales, General Services.');
    }
    }

    setBaseSalarty(baseSalary) {
    if (baseSalary >= 20000 && baseSalary <= 100000) {
        this.#baseSalary = baseSalary;
    } else {
        throw new Error('Invalid base salary. It must be between 20000 and 100000 Danish kroner.');
    }
    }

    setEducationLevel(educationLevel) {
    const validEducationalLevels = [0, 1, 2, 3];
    if (validEducationalLevels.includes(educationLevel)) {
        this.#educationLevel = educationLevel;
    } else {
        throw new Error('Invalid educational level. It must be one of: 0 (none), 1 (primary), 2 (secondary), 3 (tertiary).');
    }
    }

    setDateOfBirth(dateOfBirth) {
    const currentDate = new Date();
    const birthDate = new Date(dateOfBirth);
    const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();

    if (ageInYears >= 18) {
        this.#dateOfBirth = dateOfBirth;
    } else {
        throw new Error('Invalid date of birth. Employee must be at least 18 years old.');
    }
    }

    setDateOfEmployment(dateOfEmployment) {
    const currentDate = new Date();
    const employmentDate = new Date(dateOfEmployment);

    if (employmentDate <= currentDate) {
        this.#dateOfEmployment = dateOfEmployment;
    } else {
        throw new Error('Invalid date of employment. It cannot be in the future.');
    }
    }

    setCountry(country) {
    // You can choose whether or not to validate the country name
    this.#country = country;
    }
}


const employee = new Employee("1234567890", "John", "Doe", "IT", 30000, 3, new Date(1990, 1, 1), new Date(2010, 1, 1), "Denmark");
console.log(employee.cpr, "\n", employee.firstName, "\n", employee.lastName, "\n", employee.department, "\n", employee.baseSalary, "\n", employee.educationLevel, "\n", employee.dateOfBirth, "\n", employee.dateOfEmployment, "\n", employee.country, "\n", employee.discount, "\n", employee.shippingCost);
module.exports = Employee;