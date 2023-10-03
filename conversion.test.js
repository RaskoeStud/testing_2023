import { Length, Weight, Temperature } from './conversion.js';

describe('Length', () => {
    test('should correctly create a length object with two values', () => {
        const length = new Length("inches", 12);
        expect(length.unit).toEqual("inches");
        expect(length.value).toEqual(12);
    });

    test('should correctly convert inches to centimeters', () => {
        const length = new Length("inches", 12);
        expect(length.convert()).toEqual(4.724409448818898);
    });

    test('should correctly convert centimeters to inches', () => {
        const length = new Length("centimeters", 12);
        expect(length.convert()).toEqual(30.48);
    });

    test('should return an error if an unknown unit is passed', () => {
        const length = new Length("yards", 12);
        expect(length.convert()).toEqual("Error: Unknown unit");
    });
});

describe('Weight', () => {
    test('should correctly create a weight object with two values', () => {
        const weight = new Weight("pounds", 12);
        expect(weight.unit).toEqual("pounds");
        expect(weight.value).toEqual(12);
    });

    test('should correctly convert pounds to kilograms', () => {
        const weight = new Weight("pounds", 12);
        expect(weight.conversion()).toEqual(5.443756170703573);
    });

    test('should correctly convert kilograms to pounds', () => {
        const weight = new Weight("kilograms", 12);
        expect(weight.conversion()).toEqual(26.46);
    });

    test('should return an error if an unknown unit is passed', () => {
        const weight = new Weight("ounces", 12);
        expect(weight.conversion()).toEqual("Error: Unknown unit");
    });
});

describe('Temperature', () => {
    test('should correctly create a temperature object with three values', () => {
        const temperature = new Temperature("fahrenheit", "celsius", 12);
        expect(temperature.unit).toEqual("fahrenheit");
        expect(temperature.convertTo).toEqual("celsius");
        expect(temperature.value).toEqual(12);
    });

    test('should correctly convert fahrenheit to celsius', () => {
        const temperature = new Temperature("fahrenheit", "celsius", 12);
        expect(temperature.conversion()).toEqual(-11.11111111111111);
    });

    test('should correctly convert fahrenheit to kelvin', () => {
        const temperature = new Temperature("fahrenheit", "kelvin", 12);
        expect(temperature.conversion()).toEqual(262.0388888888889);
    });

    test('should correctly convert celsius to fahrenheit', () => {
        const temperature = new Temperature("celsius", "fahrenheit", 12);
        expect(temperature.conversion()).toEqual(53.6);
    });

    test('should correctly convert celsius to kelvin', () => {
        const temperature = new Temperature("celsius", "kelvin", 12);
        expect(temperature.conversion()).toEqual(285.15);
    });

    test('should correctly convert kelvin to fahrenheit', () => {
        const temperature = new Temperature("kelvin", "fahrenheit", 12);
        expect(temperature.conversion()).toEqual(-438.27);
    });

    test('should correctly convert kelvin to celsius', () => {
        const temperature = new Temperature("kelvin", "celsius", 12);
        expect(temperature.conversion()).toEqual(-261.15);
    });
});