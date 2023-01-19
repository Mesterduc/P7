/* 
Section of the file 
  # 1. global variables and users array
  # 2. Create members - category form and button action
  # 3. Task - task form, button action, dropdown and moveTaskBox
  # 4. Category - Category table and form - category form, form button action and create category
*/

/* --------------------------- 1. global variables and users array --------------------------- */

// Store members in array
let users = [];

// Store the last table/section where user clicked on addtask button
let chosenSection;

/* --------------------------- 2. Create members - category form and button action --------------------------- */

// Adds a member to the memberform
function addMemberToForm() {
  let member = document.getElementsByClassName("memberInput")[0];

  let memberInput = document.createElement("Input");
  member.append(memberInput);

  // Input: class, type, and input maxlength
  memberInput.classList.add("names");
  memberInput.type = "text";
  memberInput.maxLength = "4";
  // names findes all elements with class "names"
  let name = document.getElementsByClassName("names");
  // Input: placeholder
  memberInput.placeholder = "Member " + name.length;
}
// Appends the members to users array
function createMembers() {
  let name = document.getElementsByClassName("names");
  //to set names into checkbox
  for (let i = 0; i < name.length; i++) {
    // If input isn't empty: append the user
    if (name[i].value != "") {
      users.push(name[i].value);
    }
  }

  let createMembersForm = document.getElementsByClassName("createMembers")[0];
  // Removes the form
  createMembersForm.classList.toggle("hideBox");
}

/* --------------------------- 3. Task - task form, button action, dropdown and moveTaskBox  --------------------------- */

// open, closing and resets the inputs in the task form
function showTaskBox(event) {
  // event shows where we click the button
  if (event) {
    // finds parent with class of .categoryTable and saves the table in global variable "chosenSection"
    chosenSection = event.target.closest(".categoryTable");
  }
  let createTask = document.getElementsByClassName("createTask__container")[0];
  let form = document.getElementsByClassName("taskform")[0];
  // toggle the class for hidding the elements
  createTask.classList.toggle("hideBox");
  form.reset();
}

// Create new task
function createTask(event) {
  // stops the default funtionality when clicking on the button
  event.preventDefault();
  let formElement = document.getElementsByClassName("createTaskInputName")[0]; //get input from titel box
  let formTextarea = document.getElementsByClassName("createTaskTextarea")[0]; //get input from textarea box

  let taskbox = document.createElement("section"); // Create the container for taskbox
  taskbox.classList.add("taskbox"); // adds class to the taskbox
  let span = document.createElement("span"); // Create span for the delete button
  span.innerHTML = "x"; // adds x to the span
  span.classList.add("taskboxDelete"); // adds class to the span
  span.addEventListener("click", (event) => deleteTask(event));
  taskbox.append(span); // adds the span to the taskbox

  // Task Header ----------------------------------------
  // task title
  let h4 = document.createElement("h4"); // Users input in formElement (title) will show on the screen
  taskbox.append(h4); // appends the h4 to the taskbox

  h4.innerHTML = formElement.value; // Sets the h4 value
  h4.classList.add("taskboxTitle"); // adds class to the h4

  // Task description ----------------------------------------
  let h5 = document.createElement("h5"); //Users input in formTextarea (Task describtion) will show on the screen
  taskbox.append(h5);
  // Sets the h5 value
  h5.innerHTML = formTextarea.value;
  //to make a checkbox window

  // Task dropdown ----------------------------------------
  // Calls dropdown function, that creates a dropdown menu
  taskbox.append(dropdown());

  // Task checkbox ----------------------------------------
  let checkBoxContainer = document.createElement("section");
  for (let i = 0; i < users.length; i++) {
    checkBoxContainer.classList.add("checkBox__container");
    let checkBox = document.createElement("div");
    checkBox.classList.add("checkBox");

    let button = document.createElement("input");
    button.type = "checkbox";

    let spanUserInitials = document.createElement("span");
    spanUserInitials.innerHTML = users[i];

    checkBoxContainer.append(checkBox);
    checkBox.append(button);
    checkBox.append(spanUserInitials);
    taskbox.append(checkBoxContainer);
  }

  // Append the task to the right section: which is stores in chosenSection variable in the top of the file
  let todo = chosenSection.getElementsByClassName("categoryTodo")[0]; // finds where we need to put the task box
  todo.append(taskbox); // Append the task to the todo section

  // closes the taskbox and resets the form
  showTaskBox();
}

function deleteTask(event) {
  let task = event.target.closest(".taskbox");
  task.remove();
}

// Creates a dropdown box with 3 options to choose between
function dropdown() {
  let subTitle = ["TODO", "IN PROGRESS", "DONE"];

  let select = document.createElement("select");

  for (let i = 0; i < subTitle.length; i++) {
    //loop between 'TODO', 'IN PROGRESS' and 'DONE'
    const value = subTitle[i];
    let option = document.createElement("option");
    option.value = value;
    option.text = value;
    select.appendChild(option);
  }

  // adds eventlistener to the dropdown menu, thats changes the position of the task
  select.addEventListener("change", (event) => {
    moveTaskBox(event);
  });
  return select;
}

// Move task box around category
function moveTaskBox(event) {
  const taskboxCopy = event.target.closest(".taskbox"); // finds the taskbox
  const parent = event.target.closest(".categoryTable");
  if (event.target.value === "IN PROGRESS") {
    let inProgress = parent.getElementsByClassName("categoryIn-progress")[0];
    inProgress.append(taskboxCopy);
  }
  if (event.target.value === "DONE") {
    let done = parent.getElementsByClassName("categoryDone")[0];
    done.append(taskboxCopy);
  }
  if (event.target.value === "TODO") {
    let todo = parent.getElementsByClassName("categoryTodo")[0];
    todo.append(taskboxCopy);
  }
}

/* --------------------------- 4. Category table and form - category form, form button action and create category --------------------------- */

// Resets, opens and closing the category form box ('add category')
function showChapterBox() {
  let formContainer = document.getElementsByClassName(
    "createChapter__container"
  )[0];
  let form = document.getElementsByClassName("categoryForm")[0];

  formContainer.classList.toggle("hideBox");
  form.reset();
}

// Create category table section
function createChapter(event) {
  // event stops the default functionality when clicking on the button
  event.preventDefault();

  let categoryForm = document.getElementsByClassName("categoryForm")[0]; // finds the form element
  let categoryText =
    categoryForm.getElementsByClassName("formInputName")[0].value; // take the form input value

  // create table for the category
  let containerForm = document.getElementsByClassName("category")[0];
  let section = document.createElement("section");
  section.classList.add("categoryTable");
  // append the table to the html
  containerForm.append(section);

  // create the header for the category
  let titleSection = document.createElement("section");
  titleSection.classList.add("categoryTitle__container");
  let deleteButton = document.createElement("span");
  deleteButton.classList.add("deleteChapter");
  deleteButton.innerHTML = "x";
  deleteButton.addEventListener("click", (event) => deleteChapter(event));

  let h1 = document.createElement("h1");
  h1.classList.add("categoryTitle"); //h1 gets categoryTitle styling
  h1.innerHTML = categoryText; // insert form input value to table header

  // append elements to each other
  titleSection.append(h1);
  titleSection.append(deleteButton);
  section.append(titleSection);

  // array of category we want as default
  let subTitle = ["TODO", "IN PROGRESS", "DONE"];
  section.append(createTaskButton());

  // creates the 3 sections for the category
  for (let i = 0; i < subTitle.length; i++) {
    let subTitleRow = createStageRow(subTitle[i]);
    section.append(subTitleRow);
  }
  // Closes the category form and resets the form
  showChapterBox(event);
}

function deleteChapter(event) {
  let category = event.target.closest(".categoryTable");
  category.remove();
}

// Create subtitle row: todo, progress and done
function createStageRow(title) {
  let h4 = document.createElement("h4");
  if (title === "TODO") {
    h4.classList.add("categoryTodo");
  }
  if (title === "IN PROGRESS") {
    h4.classList.add("categoryIn-progress");
  }
  if (title === "DONE") {
    h4.classList.add("categoryDone");
  }
  h4.innerHTML = title;
  return h4;
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
  div.classList.add("categoryButton__container");
  button.classList.add("categoryButton");

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
