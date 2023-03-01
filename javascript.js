const container = document.querySelector('.container');
let size = prompt('Iedo cipar');
let sheet = document.createElement('style');
let colorId = '';



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
function toBlack(e) {
    this.classList.add('toBlack');
}
function rainbow(e) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.setAttribute(`style`, `background: #${randomColor}`);
    console.log(randomColor);
}
function staticColor(e) {
    document.getElementById('colorPicker').value;
    this.setAttribute(`style`, `background: ${colorPicker.value}`);
} 
function reset(e) {
    fields.forEach(field => field.setAttribute('style', ''));
    fields.forEach(field => field.classList.remove('toBlack'));
}
function grid(e) {
    fields.forEach(field=>field.classList.toggle('innerBorder'));
}
create();


const fields = document.querySelectorAll('.field');
const colorPicker = document.querySelector('#colorPicker');
const btnReset = document.querySelector('#btnReset');
const btnColor = document.querySelector('#btnColor');
const btnGrid = document.querySelector('#btnGrid');

btnGrid.addEventListener('click', grid);

btnReset.addEventListener('click', reset);
btnColor.addEventListener('click', ()=> {
    fields.forEach(field => field.addEventListener('mouseover', rainbow));
});
colorPicker.addEventListener('input', ()=> {
    fields.forEach(field => field.addEventListener('mouseover', staticColor));
});





fields.forEach(field => field.addEventListener('mouseover', toBlack));


