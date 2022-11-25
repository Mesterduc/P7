let chosenSection;
let users = [];

//to get the initials from users
function getNameInput(event) {
  let formElement = document.getElementsByClassName("form-title")[0]; //get input from titel box
  let formTextarea = document.getElementsByClassName("task")[0]; //get input from task box

  //Implement the taskbox (section) from HTLM and define it as taskbox in script
  let taskbox = document.createElement("section"); // Create the container for taskbox, created in HTML section
  taskbox.classList.add("id", "mySection"); // Class for section
  taskbox.classList.add("Box");

  // Task Header ----------------------------------------
  // task title
  let h4 = document.createElement("h4"); //Users input in formElement (title) will show on the screen
  taskbox.append(h4);
  // Sets the h4 value
  h4.innerHTML = "Write the all group members' initials";
  h4.classList.add("BoxForTitle");

  // task description
  let h5 = document.createElement("h5"); //Users input in formTextarea (Task describtion) will show on the screen
  taskbox.append(h5);
  // Sets the h5 value
  h5.innerHTML = formTextarea.value;
}

function createAddMember(event) {
  let member = document.getElementsByClassName("memberInput")[0];

  let memberInput = document.createElement("Input");
  memberInput.classList.add("names");
  member.append(memberInput);

  let name = document.getElementsByClassName("names");
  memberInput.placeholder = "Member "+name.length;
  memberInput.maxLength="4";

  
}

function addMember() {
  let name = document.getElementsByClassName("names");
  //to set names into checkbox
  for (let i = 0; i < name.length; i++) {
    // const element = array[i];
    if (name[i].value != "") {
      users.push(name[i].value);
    }
  }

  let bye = document.getElementsByClassName("goodbye")[0];

  bye.classList.toggle("createAddMember");
  bye.reset();
}

// open, closing and restet the task modal
function showTaskBox(event) {
  // event shows where we click the button
  console.log(event);
  if (event) {
    // finds parent with class of .TableColor
    chosenSection = event.target.closest(".TableColor");
  }
  let form = document.getElementsByClassName("form")[0];
  // toggle the class for the elements
  form.classList.toggle("showTaskBox");
  form.reset();
}

// Create new task, with the value we get from the modal
function getInputValue(event) {
  // stops the default funtionality when clicking on the button
  event.preventDefault();
  let formElement = document.getElementsByClassName("form-title")[0]; //get input from titel box
  let formTextarea = document.getElementsByClassName("task")[0]; //get input from task box

  //Implement the taskbox (section) from HTLM and define it as taskbox in script
  let taskbox = document.createElement("section"); // Create the container for taskbox, created in HTML section
  taskbox.classList.add("id", "mySection"); // Class for section
  taskbox.classList.add("Box");

  // Task Header ----------------------------------------
  // task title
  let h4 = document.createElement("h4"); //Users input in formElement (title) will show on the screen
  taskbox.append(h4);
  // Sets the h4 value
  h4.innerHTML = formElement.value;
  h4.classList.add("BoxForTitle");

  // task description
  let h5 = document.createElement("h5"); //Users input in formTextarea (Task describtion) will show on the screen
  taskbox.append(h5);
  // Sets the h5 value
  h5.innerHTML = formTextarea.value;
  //to make a checkbox window

  taskbox.append(dropdown());
  let checkBoxContainer = document.createElement("section");

  for (let i = 0; i < users.length; i++) {
    checkBoxContainer.classList.add("checkBoxContainer");
    let checkBox = document.createElement("div");
    let span = document.createElement("span");
    let button = document.createElement("input");
    button.type = "checkbox";
    checkBox.classList.add("checkBox");
    button.className = "btn";

    checkBoxContainer.append(checkBox);
    checkBox.append(button);
    checkBox.append(span);
    span.innerHTML = users[i];
    const element = users[i];
    taskbox.append(checkBoxContainer);
  }

  // Append the task to the right section
  let todo = chosenSection.getElementsByClassName("todo")[0]; // finds where we need to put the task box
  todo.append(taskbox); // Append the task to the todo section

  // closes the taskbox and restes the form
  showTaskBox();
}

// Open and closing the category box ('add category')
function showTaskCategory() {
  let form = document.getElementsByClassName("category-form")[0];
  form.classList.toggle("showCategoryBox");
  form.reset();
}

// Create category section
function getCategoryValue(event) {
  // A method is used to get input from titel
  event.preventDefault();

  // find form element
  // take the form input value
  let categoryForm = document.getElementsByClassName("category-form")[0];
  let categoryText = categoryForm.getElementsByClassName("form-title")[0].value;

  let containerForm = document.getElementsByClassName("container")[0];

  // create table for the category
  let section = document.createElement("section");
  section.classList.add("TableColor", "categoryBorders", "subTitle");

  // append the table to the html
  containerForm.append(section);
  let h1 = document.createElement("h1");

  h1.classList.add("TitleColor"); //h1 gets TitleColor styling

  // insert form input value to table header
  h1.innerHTML = categoryText;

  // append elements to each other
  section.append(h1);

  // array of category we want as default
  let subTitle = ["TODO", "IN PROGRESS", "DONE"];

  for (let i = 0; i < subTitle.length; i++) {
    let row = createTableRow(subTitle[i]);
    section.append(row);

    // If the the element in the subTitle array is equel 'TODO' it creates the button to add task for the section
    if (subTitle[i] === "TODO") {
      // Creates the button
      let button = createTaskButton();

      // Append the button after the TODO
      // findes the parent node and inserts the button besides the todo node
      row.parentNode.insertBefore(button, row.nextSibling);
    }
  }

  showTaskCategory(event);
}

//to move task box around
function moveTaskBox(event) {
  const copy = event.target.closest(".Box");
  const parent = event.target.closest(".TableColor");
  if (event.target.value === "IN PROGRESS") {
    let inProgress = parent.getElementsByClassName("IN-PROGRESS")[0];
    inProgress.append(copy);
  }
  if (event.target.value === "DONE") {
    let done = parent.getElementsByClassName("done")[0];
    done.append(copy);
  }
  if (event.target.value === "TODO") {
    let todo = parent.getElementsByClassName("todo")[0];
    todo.append(copy);
  }
}

//to make a dropdown box with 3 options to choose between
function dropdown() {
  let subTitle = ["TODO", "IN PROGRESS", "DONE"];

  let select = document.createElement("select");
  select.name = "choices";
  select.id = "choices";

  for (const val of subTitle) {
    //loop between 'TODO', 'IN PROGRESS' and 'DONE'
    let option = document.createElement("option");
    option.value = val;
    option.text = val;
    select.appendChild(option);
  }

  select.addEventListener("change", (event) => {
    moveTaskBox(event);
  });
  return select;
}

// Create todo, progress and done
function createTableRow(title) {
  let section = document.createElement("section");
  let h4 = document.createElement("h4");
  if (title === "TODO") {
    h4.classList.add("todo");
  }
  if (title === "IN PROGRESS") {
    h4.classList.add("IN-PROGRESS");
  }
  if (title === "DONE") {
    h4.classList.add("done");
  }

  h4.innerHTML = title;
  section.append(h4);

  return section;
}

// Create task button
function createTaskButton() {
  // Create html elements
  let section = document.createElement("section");
  let h1 = document.createElement("h1");
  let h4 = document.createElement("h4");
  let div = document.createElement("div");
  let button = document.createElement("button");

  // Add class for the elements
  div.classList.add("center");
  button.classList.add("btn", "btn--primary", "add-task");

  // Add value to button
  button.innerHTML = "+ Add task";
  button.addEventListener("click", function (event) {
    showTaskBox(event);
  });

  // Appends the elements to each other
  section.append(h1);
  h1.append(h4);
  h4.append(div);
  div.append(button);

  // Returns the button
  return section;
}
