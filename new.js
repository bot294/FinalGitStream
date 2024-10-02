/**
 * Calculates the factorial of a given number.
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} - The factorial of the number.
 * @throws {Error} - Throws an error if the input is not a non-negative integer.
 */
function factorial(n) {
    if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer");
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function new_fun()
{
    console.log("Hey, I am a new function");
}
new_fun();
// Example usage
try {
    console.log(factorial(5)); // Output: 120
    console.log(factorial(0)); // Output: 1
    console.log(factorial(1)); // Throws error
} catch (error) {
    console.error(error.message);
}
