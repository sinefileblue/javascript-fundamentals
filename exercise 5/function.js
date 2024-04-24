// Create an algorithm that guesses the
// number entered by the user optimally such that we always exclude at least
// half of the available numbers in the domain 1 to 100.
// In each step, console log the guess and conosle log whether the number
// to be guessed is lower, higher, or equal to the guess.
// Example: supposed the user entered 35. The computer's guesses: 
// 50 lower (remaining interval: 1 to 49)
// 25 higher (remaining interval: 26 to 49)
// 38 lower (remaining interval: 26 to 38)
// 31 higher (remaining interval: 32 to 38)
// 35 match

function guessTheNumber() {
    let minValue = 1;
    let maxValue = 100;
    let guess = Math.floor((minValue + maxValue) / 2);
    console.log(guess);
    while (true) {
        let answer = prompt(
            `Is your number ${guess}? Enter 'h' for higher, 'l' for lower, or 'c' for correct`
        );
        if (answer === 'h') {
            maxValue = guess - 1;
            guess = Math.floor((minValue + maxValue) / 2);
            console.log(guess);
        } else if (answer === 'l') {
            minValue = guess + 1;
            guess = Math.floor((minValue + maxValue) / 2);
            console.log(guess);
        } else if (answer === 'c') {
            break;
        } else {
            console.log('Invalid input');
        }
    }
}
let intValue = null;
do {
    let value = prompt('Enter a number between 1 and 100');
    intValue = Number.parseInt(value);
} while (
    Number.isNaN(intValue) ||
    typeof intValue!== 'number' ||
    intValue < 1 ||
    intValue > 100
);

let minValue = 1;
let maxValue = 100;
