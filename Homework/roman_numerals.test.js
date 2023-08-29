const {romanToInt} = require('./roman_numerals');

describe('romanToInt', () => {
    beforeAll(() => {
        console.log('Test numeral converter');
    });
    it('romanToInt', () => {
        expect(romanToInt('I')).toBe(1);
        expect(romanToInt('V')).toBe(5);
        expect(romanToInt('X')).toBe(10);
        expect(romanToInt('L')).toBe(50);
        expect(romanToInt('C')).toBe(100);
        expect(romanToInt('D')).toBe(500);
        expect(romanToInt('M')).toBe(1000);
        expect(romanToInt('IV')).toBe(4);
        expect(romanToInt('IX')).toBe(9);
        expect(romanToInt('XL')).toBe(40);
        expect(romanToInt('XC')).toBe(90);
        expect(romanToInt('CD')).toBe(400);
        expect(romanToInt('MDCCCLXVII')).toBe(1867);
        expect(romanToInt('MCMXCIV')).toBe(1994);
        expect(romanToInt('MMXXI')).toBe(2021);

        expect(romanToInt('I')).not.toBe(2);
        expect(romanToInt('V')).not.toBe(6);
        expect(romanToInt('X')).not.toBe(11);
        expect(romanToInt('L')).not.toBe(51);
        expect(romanToInt('C')).not.toBe(101);
        expect(romanToInt('D')).not.toBe(501);
        expect(romanToInt('M')).not.toBe(1001);
        expect(romanToInt('IV')).not.toBe(5);
        expect(romanToInt('IX')).not.toBe(10);
        expect(romanToInt('XL')).not.toBe(50);
        expect(romanToInt('XC')).not.toBe(100);
        expect(romanToInt('CD')).not.toBe(500);
        expect(romanToInt('CM')).not.toBe(1000);
        expect(romanToInt('MCMXCIV')).not.toBe(1995);
        expect(romanToInt('MMXXI')).not.toBe(2022);
    });

    afterAll(() => {
        console.log('Numeral converter done');
    });
});