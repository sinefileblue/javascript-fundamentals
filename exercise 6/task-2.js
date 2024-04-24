let arr = [1, 2, 5];

function incrementValues(list) {
    list = [...list]; // shallow copy - outside world stays intact
    for (let i in list) {
        list[i] += 1;
    }
    console.log('inside', list);
}

incrementValues(arr);
console.log('outside', arr);