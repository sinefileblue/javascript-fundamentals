let array = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
];

function toUlMarkup(list) {
    let html = '<ul';
    for (let item of list) {
        html += '<li>${item}</li>';
    }
    html += '</ul>';
    return html;
}

console.log(toUlMarkup(list));

let container = document.querySelector('#container');
container.innerHTML = toUlMarkup(days);