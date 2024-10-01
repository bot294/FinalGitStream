/**
 * Calculates the factorial of a given number.
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} - The factorial of the number.
 * @throws {Error} - Throws an error if the input is not a non-negative integer.
 */
function factorialFun(n) {
    if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer");
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
try {
    console.log(factorialFun(5)); // Output: 120
    console.log(factorialFun(0)); // Output: 1
    console.log(factorialFun(1)); // Throws error
} catch (error) {
    console.error(error.message);
}
