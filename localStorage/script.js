const addItems = document.querySelector('.add-items');;
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item')).value;
    const item = {
        text: text,
        checked: false
    }
    items.push(item);
    //console.log(items);
    renderItems(items,itemsList);
    localStorage.setItem('items',JSON.stringify(items));
    this.reset();
}

function renderItems(plates = [], platesList) { 
    const asach = plates.map((plate,index) => {
        return `<li>
        <input data-index="${index}" id='item${index}' type="checkbox" ${plate.checked ? 'checked': ""}>
        <label for='item${index}'>${plate.text}</label>
        </li>`
    });
    platesList.innerHTML = asach.join(' ')
}

function toggleCheck(e) {
    if (!e.target.matches('input')) {return}
    const el = e.target;
    const index = el.dataset.index;
    items[index].checked = !(items[index].checked);
    localStorage.setItem('items',JSON.stringify(items));
    renderItems(items,itemsList);
    console.log(items[index].checked)
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleCheck);
renderItems(items,itemsList);
const inputs = document.querySelectorAll('input');
