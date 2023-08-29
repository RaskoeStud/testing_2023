function romanToInt(roman){
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
        let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = romanValues[roman[i]];
        const next = romanValues[roman[i + 1]];

        if (next && current < next) {
            result += next - current;
            i++; 
        } else {
            result += current;
        }
    }
    return result;
};

  // Example usage
const romanNumeral = "MCMXCIV";
const integerEquivalent = romanToInt(romanNumeral);

exports.romanToInt = romanToInt;