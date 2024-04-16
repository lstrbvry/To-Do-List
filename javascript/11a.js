

const storedList = JSON.parse(localStorage.getItem('toDoList'))
let toDoList = null;
if (storedList){
  toDoList = storedList;
}else{
  toDoList = []
} 
function addToList() {
  const newItem = document.querySelector(".js-enter-new").value;
  const dateInput = document.querySelector(".js-dueDate").value;
  
  toDoList.push({
    name: newItem,
    dueDate: dateInput,
  });
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  document.querySelector(".js-enter-new").value = "";
  document.querySelector(".js-dueDate").value = "";
  displayList();
}

function displayList() {
  let toDoListHtml = "";
  for (let i = 0; i < toDoList.length; i++) {
    const newToDoObject = toDoList[i];
    const name = newToDoObject.name;
    const dueDate = newToDoObject.dueDate;
    //object deconstruction
    const html = `<div class = "to-do-grid"><div class = "new-item">${name}</div>
    <div class = "new-date">${dueDate}</div>
    <button = class = "delete-button" onclick = "
      toDoList.splice(${i},1);
      localStorage.removeItem('toDoList');
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
      displayList();
      ">Delete</button></div>`;
      if(name&&dueDate !== ''){
        toDoListHtml += html;
      }
    
  }
  document.querySelector(".js-display-list").innerHTML = toDoListHtml;
}
function onKeyDownEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addToList();
  }
}
function resetList() {
  toDoList = [];

  displayList();
}
document.addEventListener("DOMContentLoaded", displayList());
// function displayLoop() {
// 	for (i = 0; i < toDoList.length; i++) {
// 		console.log(toDoList[i]);
// 	}
// }
