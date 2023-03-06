const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
let size = slider.value;
let sheet = document.createElement('style');
let colorValue = '#8f00ac';
filter = 100;




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
    const fields = document.querySelectorAll('.field');
    fields.forEach(field => field.addEventListener('mouseover', color));
    btnGrid.addEventListener('click', grid);
    btnReset.addEventListener('click', reset);
    function reset(e) {
        fields.forEach(field => field.setAttribute('style', ''));
    }
    function grid(e) {
        fields.forEach(field=>field.classList.toggle('innerBorder'));
    }

};
/*Coloring functions*/

function randomColor(e) {
    colorValue = "#" + (Math.floor(Math.random()*16777215).toString(16));
    return colorValue;
}

function color(e) {
    this.setAttribute('style', `background: ${colorValue}`);
};
function setSize(e) {
    size = slider.value;
    console.log(size);
    return size;
}

create();
const btnColor = document.querySelector('#btnColor');
const colorPicker = document.querySelector('#colorPicker');
const screen = document.querySelector('.screen');
const btnDarker =document.querySelector('#btnDark');
const beachBtn = document.querySelector('.beachBtn');
const body = document.querySelector('body');

body.classList.toggle('beach');
beachBtn.addEventListener('click', (e) => {
    body.classList.toggle('beach');
})





slider.addEventListener('input', (e) => {
    size = slider.value;
    container.innerHTML = '';
    create();
})
colorPicker.addEventListener('input', (e) => {
     window.removeEventListener("mouseover", randomColor);
     colorValue = colorPicker.value;
     btnColor.classList.remove('btnOn');
     colorPicker.setAttribute('style', 'transition: 0.5s; border: solid 4px rgb(202, 15, 15);');
     return colorValue;
}); 
btnColor.addEventListener('click', (e) => {
    window.addEventListener('mouseover', randomColor)
    btnColor.classList.add('btnOn');
    colorPicker.setAttribute('style', 'transition: 0.5s;');
    return "#" + colorValue
});
