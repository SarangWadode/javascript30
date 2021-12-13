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
    console.log(items);
    this.reset();
}
addItems.addEventListener('submit', addItem);
