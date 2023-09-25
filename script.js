// const addedRows = [];
// ADD NEW ITEMS
function addItem() {
  const mainContainer = document.getElementById("mainContainer");
  const texto = document.getElementById("texto");
  const remove = document.getElementById("remove");

  const newRow = document.createElement("div");
  newRow.className = "mainContainer";
  newRow.style.display = "flex";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.style.display = "flex";

  const itemName = document.createElement("input");
  itemName.type = "text";
  itemName.className = "itemName";
  itemName.placeholder = "Item";

  const qty = document.createElement("input");
  qty.type = "number";
  qty.className = "quantity";
  qty.placeholder = "Qty";

  newRow.appendChild(checkbox);
  newRow.appendChild(itemName);
  newRow.appendChild(qty);

  mainContainer.appendChild(newRow);
  addedRows.push(newRow);
  texto.textContent = "";

  // LINE-THROUGH COMPLETED ITEMS
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      itemName.style.textDecoration = "line-through";
      qty.style.textDecoration = "line-through";
    } else {
      itemName.style.textDecoration = "none";
      qty.style.textDecoration = "none";
    }
  });
}

// REMOVE LAST ROW
function removeRow() {
  if (addedRows.length > 0) {
    const lastRow = addedRows.pop();
    lastRow.remove();
  }
}

const fechaActual = new Date();

// SAVING A LIST
function saveList() {
  const listName = prompt("Introduce a list name: ");
  const listNameFinal = listName || fechaActual;

  const mainContainer = document.getElementById("mainContainer");
  const items = mainContainer.querySelectorAll(".mainContainer");

  // CREATE A LIST TO STORE ELEMENTS
  const addedRows = [];

  items.forEach(function (item) {
    const checkbox = item.querySelector(".checkbox");
    const itemName = item.querySelector(".itemName");
    const qty = item.querySelector(".quantity");

    // ADD AN ELEMENT TO THE LIST
    addedRows.push({
      checkboxChecked: checkbox.checked,
      itemName: itemName.value,
      qty: qty.value,
    });
  });

  // SAVING A LIST
  // CREATE AN OBJECT IN WHICH I STORE THE LIST NAME AND THE ITEM (addedRows) IT CONTAINS
  const groceriesList = {
    name: listNameFinal,
    items: addedRows,
  };
  localStorage.setItem(listNameFinal, JSON.stringify(groceriesList));
}

let addedRows = [];

// LOAD AND SHOW STORED LIST
const listShow = document.getElementById("storedList");
const listContainer = document.getElementById("listContainer");
console.log("Running properly");
function loadList() {
  listContainer.style.display = "flex";
  listShow.innerHTML = ""; // REMOVE PREVIOUS CONTENT

  const listNameFinalNames = Object.keys(localStorage);

  for (const listNameFinal of listNameFinalNames) {
    const storedList = localStorage.getItem(listNameFinal);

    if (storedList) {
      const groceriesList = JSON.parse(storedList);
      const name = groceriesList.name;

      // SHOWING LIST NAMES
      const listItem = document.createElement("div");
      listItem.textContent = "List: " + name;
      listShow.appendChild(listItem);

      listItem.dataset.listName = name;

      listItem.addEventListener("click", function () {
        const selectedListName = listItem.dataset.listName;
        cargarItemsDeLista(selectedListName);
      });
    }
  }
}

function cargarItemsDeLista(selectedListName) {
  // LOAD THE SELECTED LIST FROM LOCAL
  const storedList = localStorage.getItem(selectedListName);

  if (storedList) {
    const groceriesList = JSON.parse(storedList);
    addedRows = groceriesList.items || [];

    // Mostrar los elementos de la lista en la interfaz de usuario
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.innerHTML = ""; // CLEAN PREVIOUS CONTENT

    for (const item of addedRows) {
      // CREATE ELEMENTS FOR EACH ITEM OF THE LIST
      const newRow = document.createElement("div");
      newRow.className = "mainContainer";
      newRow.style.display = "flex";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";
      checkbox.style.display = "flex";
      if (item.checkboxChecked) {
        checkbox.checked = true;
      }

      const itemName = document.createElement("input");
      itemName.type = "text";
      itemName.className = "itemName";
      itemName.placeholder = "Item";
      itemName.value = item.itemName || "";

      const qty = document.createElement("input");
      qty.type = "number";
      qty.className = "quantity";
      qty.placeholder = "Qty";
      qty.value = item.qty || "";

      newRow.appendChild(checkbox);
      newRow.appendChild(itemName);
      newRow.appendChild(qty);

      mainContainer.appendChild(newRow);

      // ADD CHECK FOR LINE THROUGH EVENT
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          itemName.style.textDecoration = "line-through";
          qty.style.textDecoration = "line-through";
          item.checkboxChecked = true;
        } else {
          itemName.style.textDecoration = "none";
          qty.style.textDecoration = "none";
          item.checkboxChecked = false;
        }
      });
    }
  }
}

function closeList() {
  listContainer.style.display = "none";
}

//CLEAN BUTTON
const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function () {
  const confirm = window.confirm(
    "Would you like to clean the memory and delete the stored list?"
  );

  if (confirm === true) {
    localStorage.clear();
    listShow.innerHTML = "";
  }
});
