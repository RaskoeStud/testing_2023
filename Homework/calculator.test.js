const {sum, sub, mult, div} = require('./calculator');

describe('calculator', () => {
    beforeAll(() => {
        console.log('Test calculator');
    });

    const sumTest = [{"a": 1, "b": 2, "expected": 3},
                    {"a": 2, "b": 2, "expected": 4},
                    {"a": -2, "b": 3, "expected": 1},]
    it.each(sumTest)('Sum should add two numbers correctly', (number) => {
        expect(sum(number.a, number.b)).toBe(number.expected);
    })

    const sumNotTest = [{"a": 2, "b": 2, "expected": 3},
                    {"a": -1, "b": 4, "expected": 5}]
    it.each(sumNotTest)('Sum should add two numbers INcorrectly', (number) => {
        expect(sum(number.a, number.b)).not.toBe(number.expected);
    })

    it('sub', () => {
        expect(sub(1, 2)).toBe(-1);
    });

    it('mult', () => {
        expect(mult(1, 2)).toBe(2);
    });

    it('div', () => {
        expect(div(1, 2)).toBe(0.5);
    });

    afterAll(() => {
        console.log('Test calculator done');
    });
});