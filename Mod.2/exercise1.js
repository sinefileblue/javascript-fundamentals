// Ask the user to enter a number and print its parity ("even", "odd", "N/A")

let value = promopt('Enter an integer');
let intValue = number.parseInt(value);

if (isNaN(intValue)) {
    console.log('N/A');
} else if (intValue % 2 === 1) {
    console.log('odd');
} else if (intValue % 2 === 0) {
    console.log('even');
} else {
    console.log('other value');
}

// if (true) {
//   console.log('abc');

if (intValue >= 2) {
    console.log('At least 2');
}