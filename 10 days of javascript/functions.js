
function factorial(number) {
    if (number < 0) {
        throw 'Input to factorial() must be non-negative';
    }

    return (number === 0 || number === 1) ? 1 : number * factorial(number - 1);
}

console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(2));
