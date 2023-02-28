const container = document.querySelector('.container');
let size = prompt('Iedo cipar');
let sheet = document.createElement('style')



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
function toBlack(e) {
    this.classList.add('toBlack');
} 
create();


const fields = document.querySelectorAll('.field');

fields.forEach(field => field.addEventListener('mouseover', toBlack));


