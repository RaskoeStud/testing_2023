
function countLetters(str) {
    let letters = {};
    for (let letter of str) {
        if (letter !== ' ') {
            if (letters[letter]) {
                letters[letter]++;
            } else {
                letters[letter] = 1;
            }
        }
    }
    return letters;
}

function isAnagram(str1, str2) {
    str1 = countLetters(str1)
    str2 = countLetters(str2)
    str1 = Object.entries(str1)
    str2 = Object.entries(str2)

    str1.sort((a, b) => a[0].localeCompare(b[0]))
    Object.fromEntries(str1)
    str2.sort((a, b) => a[0].localeCompare(b[0]))
    Object.fromEntries(str2)

    return JSON.stringify(str1) === JSON.stringify(str2);
}

exports.countLetters = countLetters;
exports.isAnagram = isAnagram;