const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
let size = slider.value;
let sheet = document.createElement('style');
let colorValue = '#8f00ac';
filter = 100;
var mouseIsDown = false
container.addEventListener('mousedown', function(){mouseIsDown = true})
window.addEventListener('mouseup', function(){mouseIsDown = false})



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
        click.currentTime = 0;
        click.play();
        fields.forEach(field => field.setAttribute('style', ''));
    }
    function grid(e) {
        click.currentTime = 0;
        click.play();
        fields.forEach(field=>field.classList.toggle('innerBorder'));
        btnGrid.classList.toggle('btnOn');
    }

};
/*Coloring functions*/

function randomColor(e) {
    colorValue = "#" + (Math.floor(Math.random()*16777215).toString(16));
    return colorValue;
}

function color(e) {
    if (mouseIsDown) {
        this.setAttribute('style', `background: ${colorValue}`);
        draw.play();
    } else draw.pause();
    
    
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
const click = document.querySelector('.click');
const draw = document.querySelector('.draw');
const travel = document.querySelector('.travel');
const mute = document.querySelector('#btnMute');


body.classList.toggle('beach');
beachBtn.addEventListener('click', (e) => {
    travel.volume = 0.2;
    travel.currentTime = 0;
    travel.play();
    click.play();
    body.classList.toggle('beach');
})




mute.addEventListener('click', (e) => {
    click.currentTime = 0;
    click.play();
    btnMute.classList.toggle('btnOn');
    if (btnMute.classList.contains('btnOn')) {
        draw.muted = true;
        travel.muted = true;
        click.muted = true;
    } else draw.muted = false,
            click.muted = false,
            travel.muted = false;
});

slider.addEventListener('input', (e) => {
    size = slider.value;
    container.innerHTML = '';
    create();
    click.play();
    btnGrid.classList.remove('btnOn');
})
colorPicker.addEventListener('input', (e) => {
        click.play();
     window.removeEventListener("mouseover", randomColor);
     colorValue = colorPicker.value;
     btnColor.classList.remove('btnOn');
     colorPicker.setAttribute('style', `transition: 0.5s; border: solid 3px ${colorValue};`);
     return colorValue;
}); 
btnColor.addEventListener('click', (e) => {
    click.play();
    window.addEventListener('mouseover', randomColor)
    btnColor.classList.add('btnOn');
    colorPicker.setAttribute('style', 'transition: 0.5s;');
    return "#" + colorValue
});
