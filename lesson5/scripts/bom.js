const chapterInput = document.querySelector("favchap");
const addButton = document.querySelector("main button");
const chapterList = document.querySelector("#list");

addButton.addEventListener('click', () => {
if (chapterInput.value == ""){
    return;
}

let newListItem = document.createElement("li");
let deleteButton = document.createElement("button");

newListItem.textContent = chapterInput.value;

deleteButton.textContent = 'X';

newListItem.appendChild(deleteButton);

chapterList.appendChild(newListItem);

deleteButton.addEventListener('click', () => {
    newListItem.remove();
})

chapterInput.focus();

chapterInput.value= "";
});
