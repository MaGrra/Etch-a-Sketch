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
}
function staticColor(e) {
    document.getElementById('colorPicker').value;
    this.setAttribute(`style`, `background: ${colorPicker.value}`)
    console.log(colorId);
} 
function reset(e) {
    fields.forEach(field => field.setAttribute('style', ''));
}
create();


const fields = document.querySelectorAll('.field');
const colorPicker = document.querySelector('#colorPicker');
const btnReset = document.querySelector('#btnReset');

btnReset.addEventListener('click', reset)





fields.forEach(field => field.addEventListener('mouseover', rainbow));

