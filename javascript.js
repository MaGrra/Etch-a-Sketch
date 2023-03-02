const container = document.querySelector('.container');
let size = prompt('Iedo cipar');
let sheet = document.createElement('style');
let colorValue = '#000000';



/*Create a grid*/
function create() {
    let square = 100 / size;
    for (let i = 0; i < (size ** 2); i++) {
        const field = document.createElement('div');
        field.classList.add('field');
        sheet.innerHTML = `.field {min-width: ${square}%; min-height: ${square}%}`;
        document.body.appendChild(sheet);
        container.appendChild(field);
}
};
/*Coloring functions*/
function reset(e) {
    fields.forEach(field => field.setAttribute('style', ''));
}
function grid(e) {
    fields.forEach(field=>field.classList.toggle('innerBorder'));
}
function randomColor(e) {
    colorValue = "#" + (Math.floor(Math.random()*16777215).toString(16));
    return colorValue;
}
function darker(e) {
    
}
function color(e) {
    this.setAttribute('style', `background: ${colorValue}`)
};

create();

const fields = document.querySelectorAll('.field');
const colorPicker = document.querySelector('#colorPicker');
const btnReset = document.querySelector('#btnReset');
const btnColor = document.querySelector('#btnColor');
const btnGrid = document.querySelector('#btnGrid');

btnGrid.addEventListener('click', grid);
btnReset.addEventListener('click', reset);


fields.forEach(field => field.addEventListener('mouseover', color));


colorPicker.addEventListener('input', (e) => {
     window.removeEventListener("mouseover", randomColor);
     colorValue = colorPicker.value;
     return colorValue;
}); 
btnColor.addEventListener('click', (e) => {
    window.addEventListener('mouseover', randomColor)
    return "#" + colorValue
});


