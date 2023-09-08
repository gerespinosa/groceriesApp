const addedRows = [];
// ADD NEW ITEMS
function addItem() {
  const mainContainer = document.getElementById('mainContainer')
  const texto = document.getElementById('texto')
  const remove = document.getElementById('remove')

  const newRow = document.createElement('div');
        newRow.className=('mainContainer');
        newRow.style.display = 'flex';

    const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.style.display = 'flex';

    const itemName = document.createElement('input');
        itemName.type = 'text';
        itemName.className = 'itemName';
        itemName.placeholder = 'Item';

    const qty = document.createElement('input');
        qty.type = 'number';
        qty.className = 'quantity';
        qty.placeholder = 'Qty';

    newRow.appendChild(checkbox);
    newRow.appendChild(itemName);
    newRow.appendChild(qty);

    mainContainer.appendChild(newRow);
    addedRows.push(newRow);
    texto.textContent= "";

// LINE-THROUGH COMPLETED ITEMS
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      itemName.style.textDecoration = 'line-through';
      qty.style.textDecoration = 'line-through';
    } else {
      itemName.style.textDecoration = 'none';
      qty.style.textDecoration = 'none';
    }

  })};
  
// REMOVE LAST ROW
function removeRow(){
  if(addedRows.length > 0) {
    const lastRow = addedRows.pop(); 
    lastRow.remove();
  }
}



