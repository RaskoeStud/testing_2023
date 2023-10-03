const { countLetters, isAnagram } = require('./TDD');

describe('TDD', () => {
    beforeAll(() => {
        console.log('Test TDD');
    });

    const letterCounterTest = [{"string": "cat", "expected": {c: 1, a: 1, t: 1}, 
                                "string": "car", "expected": {c: 1, a: 1, r: 1},
                                "string": "better", "expected": {b: 1, e: 2, t: 2, r: 1},
                                "string": "have fun", "expected": {h: 1, a: 1, v: 1, e: 1, f: 1, u: 1, n: 1},
                                "string": "æøå/()=+", "expected": {æ: 1, ø: 1, å: 1, "/": 1, "(": 1, ")": 1, "=": 1, "+": 1},
                                "string": "123 er en leg", "expected": {1: 1, 2: 1, 3: 1, e: 3, r: 1, n: 1, l: 1, g: 1},
                                "string": "I love JavaScript", "expected": {I: 1, l: 1, o: 1, v: 2, e: 1, J: 1, a: 2, S: 1, c: 1, r: 1, i: 1, p: 1, t: 1},}
                            ]

    it.each(letterCounterTest)('Count each letter instance in a string', (input) => {
        expect(countLetters(input.string)).toEqual(input.expected);
    });

    const anagramTest = [{"string1": "cat", "string2": "tac", "expected": true},
                        {"string1": "car", "string2": "rac", "expected": true},
                        {"string1": "better", "string2": "tterbw", "expected": false}]

    it.each(anagramTest)('Ascertain whether two strings are anagrams or not', (input) => {
        expect(isAnagram(input.string1, input.string2)).toEqual(input.expected);
    });
});