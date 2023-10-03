

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b == 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

exports.sum = sum;
exports.sub = sub;
exports.mult = mult;
exports.div = div;

