let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function generateTable(matrix) {
    let markup = '<table><tbody>';

    for (let row of matrix) {
        markup += '<tr>';
        for (let cell of row) {
            markup += `<td>${cell}</td>`;
        }
        markup += '</tr>';
    
}

    markup += '</tbody></table>';
    return markup;
}

console.log(generateMatrix(matrix));
