let inputForm = document.forms.userInput;
let userInput = document.forms.userInput.value;
let toDoList = document.getElementById("toDoList");
let doneList = document.getElementById("doneList");
let listArr = [];
let doneListArr = [];

inputForm.addEventListener("submit"; (e) => {
  listArr.push(userInput);
  for(let listItem of listArr) {
    let newItem = toDoList.createNewElement("li");
    newItem.textContent = listItem;
  };
});
