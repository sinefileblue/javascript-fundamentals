let secretValue = Math.floor(Math.random() * 100);

if (secretValue === 0) {
    console.log('zero');
} else if (secretValue === 1) {
    console.log('one');
} else if (secretValue === 2) {
    console.log('two');
} else if (secretValue === 3) {
    console.log('three');
} else {
    console.log('four');
}

switch (secretValue) {
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    default:
        console.lof('four');
}

