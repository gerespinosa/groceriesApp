// ADD NEW ITEMS
const button = document.getElementById('button')
const container = document.getElementById('container')

button.addEventListener('click', function(){
    const newRow = document.createElement('div');
        newRow.className=('container');
        newRow.style.display = 'flex';
        newRow.style.justifyContent = 'space-between';

    const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'checkBox';
        checkBox.style.display = 'flex';

    const itemName = document.createElement('input');
        itemName.type = 'text';
        itemName.className = 'itemName';
        itemName.placeholder = 'Item';
        itemName.style.width = '70vw';
        itemName.style.marginLeft = '4vw';

    const quantity = document.createElement('input');
        quantity.type = 'number';
        quantity.className = 'quantity';
        quantity.placeholder = 'Qty';
        quantity.style.width = '12vw';
        quantity.style.display = 'flex';
        quantity.style.marginLeft = '7vw';

    newRow.appendChild(checkBox);
    newRow.appendChild(itemName);
    newRow.appendChild(quantity);

    container.appendChild(newRow);

    container.style.justifyContent = 'space-between';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.flexWrap = 'wrap';
    container.style.paddingLeft = '2vw';

  // LINE-THROUGH COMPLETED ITEMS
    checkBox.addEventListener('change', function() {
        if (checkBox.checked) {
          itemName.style.textDecoration = 'line-through';
        } else {
          itemName.style.textDecoration = 'none';
        }
      });
})

// CLEAN SCREEN
const removeButton = document.getElementById('remove');

removeButton.addEventListener('click', function(){
  container.innerHTML = "";
});

