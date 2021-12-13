const addItems = document.querySelector('.add-items');;
const itemsList = document.querySelector('.plates');
const items = [];

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
    localStorage.setItem('items',items);
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
    // console.log(asach.join(' '));
}
addItems.addEventListener('submit', addItem);
