/* 
Section of the file 
  # 1. global variables and users array
  # 2. Create members - category form and button action
  # 3. Task - task form, button action, dropdown and moveTaskBox
  # 4. Category - Category table and form - category form, form button action and create chapter
*/

/* --------------------------- 1. global variables and users array --------------------------- */

// Store members in array
let users = [];

// Store the last table/section where user clicked on addtask button
let chosenSection;

let columns = document.querySelectorAll('.categoryTable');

/* --------------------------- 2. Create members - category form and button action --------------------------- */

// Adds a member to the memberform
function addMemberToForm() {
	let member = document.getElementsByClassName('memberInput')[0];

	let memberInput = document.createElement('Input');
	member.append(memberInput);

	// Input: class, type, and input maxlength
	memberInput.classList.add('names');
	memberInput.type = 'text';
	memberInput.maxLength = '4';
	// names findes all elements with class "names"
	let name = document.getElementsByClassName('names');
	// Input: placeholder
	memberInput.placeholder = 'Member ' + name.length + ' - max 4 characters';
}
// Appends the members to users array
function createMembers() {
	let name = document.getElementsByClassName('names');
	//to set names into checkbox
	for (let i = 0; i < name.length; i++) {
		// If input isn't empty: append the user
		if (name[i].value != '') {
			users.push(name[i].value);
		}
	}

	let createMembersForm = document.getElementsByClassName('createMembers')[0];
	// Removes the form
	createMembersForm.classList.toggle('hideBox');
}

/* --------------------------- 3. Task - task form, button action, dropdown and moveTaskBox  --------------------------- */

// open, closing and resets the inputs in the task form
function showTaskBox(event) {
	// event shows where we click the button
	if (event) {
		// finds parent with class of .categoryTable and saves the table in global variable "chosenSection"
		chosenSection = event.target.closest('.categoryTable');
	}
	let createTask = document.getElementsByClassName('createTask__container')[0];
	let form = document.getElementsByClassName('taskform')[0];
	// toggle the class for hidding the elements
	createTask.classList.toggle('hideBox');
	form.reset();
}

// Create new task
function createTask(event) {
	// stops the default funtionality when clicking on the button
	event.preventDefault();
	let formElement = document.getElementsByClassName('createTaskInputName')[0]; //get input from titel box
	let formTextarea = document.getElementsByClassName('createTaskTextarea')[0]; //get input from textarea box

	let taskbox = document.createElement('section'); // Create the container for taskbox
	taskbox.classList.add('taskbox'); // adds class to the taskbox
	let span = document.createElement('span'); // Create span for the delete button
	span.innerHTML = 'x'; // adds x to the span
	span.classList.add('taskboxDelete'); // adds class to the span
	span.addEventListener('click', (event) => toggleDialog(event, '.taskbox'));
	taskbox.append(span); // adds the span to the taskbox

	// Task Header ----------------------------------------
	let h4 = document.createElement('h4'); // Users input in formElement (title) will show on the screen
	// let h1 = document.createElement('h1');
	let div = document.createElement('div');
	taskbox.append(div); // appends the h4 to the taskbox
	div.append(h4); // appends the h4 to the taskbox
	// let span = document.createElement('span');
	// h1.append(div);
	// div.append(span);
	div.id = 'element';
	h4.addEventListener('click', (event) => changeChapter(event, 'h4', 'taskboxTitle'));

	h4.innerHTML = formElement.value; // Sets the h4 value
	h4.classList.add('taskboxTitle'); // adds class to the h4

	// Task description ----------------------------------------
	let divBody = document.createElement('div');
	divBody.id = 'element';
	divBody.classList.add('taskboxBody');
	let h5 = document.createElement('h5'); //Users input in formTextarea (Task describtion) will show on the screen
	taskbox.append(divBody);
	divBody.append(h5);

	h5.addEventListener('click', (event) => changeChapter(event, 'h5'));
	// Sets the h5 value
	h5.innerHTML = formTextarea.value;
	//to make a checkbox window

	// Task dropdown ----------------------------------------
	// Calls dropdown function, that creates a dropdown menu
	taskbox.append(dropdown());

	// Task checkbox ----------------------------------------
	let checkBoxContainer = document.createElement('section');
	for (let i = 0; i < users.length; i++) {
		checkBoxContainer.classList.add('checkBox__container');
		let checkBox = document.createElement('div');
		checkBox.classList.add('checkBox');

		let button = document.createElement('input');
		button.type = 'checkbox';

		let spanUserInitials = document.createElement('span');
		spanUserInitials.innerHTML = users[i];

		checkBoxContainer.append(checkBox);
		checkBox.append(button);
		checkBox.append(spanUserInitials);
		taskbox.append(checkBoxContainer);
	}

	// Append the task to the right section: which is stores in chosenSection variable in the top of the file
	let todo = chosenSection.getElementsByClassName('categoryTodo')[0]; // finds where we need to put the task box
	todo.append(taskbox); // Append the task to the todo section

	// closes the taskbox and resets the form
	showTaskBox();
}

function deleteTask(event) {
	let task = event.target.closest('.taskbox');
	task.remove();
}

// Creates a dropdown box with 3 options to choose between
function dropdown() {
	let subTitle = ['TODO', 'IN PROGRESS', 'DONE'];

	let select = document.createElement('select');

	for (let i = 0; i < subTitle.length; i++) {
		//loop between 'TODO', 'IN PROGRESS' and 'DONE'
		const value = subTitle[i];
		let option = document.createElement('option');
		option.value = value;
		option.text = value;
		select.appendChild(option);
	}

	// adds eventlistener to the dropdown menu, thats changes the position of the task
	select.addEventListener('change', (event) => {
		moveTaskBox(event);
	});
	return select;
}

// Move task box around category
function moveTaskBox(event) {
	const taskboxCopy = event.target.closest('.taskbox'); // finds the taskbox
	const parent = event.target.closest('.categoryTable');
	if (event.target.value === 'IN PROGRESS') {
		let inProgress = parent.getElementsByClassName('categoryIn-progress')[0];
		inProgress.append(taskboxCopy);
	}
	if (event.target.value === 'DONE') {
		let done = parent.getElementsByClassName('categoryDone')[0];
		done.append(taskboxCopy);
	}
	if (event.target.value === 'TODO') {
		let todo = parent.getElementsByClassName('categoryTodo')[0];
		todo.append(taskboxCopy);
	}
}

/* --------------------------- 4. Category table and form - category form, form button action and create category --------------------------- */

// Resets, opens and closing the category form box ('add category')
function showChapterBox() {
	let formContainer = document.getElementsByClassName('createChapter__container')[0];
	let form = document.getElementsByClassName('categoryForm')[0];

	formContainer.classList.toggle('hideBox');
	form.reset();
}

// Create chapter section
function toggleDialog(event, tag) {
	const favDialog = document.getElementById('favDialog');
	const confirmBtn = favDialog.querySelector('#confirmBtn');

	confirmBtn.addEventListener('click', (e) => {
		let task = event.target.closest(tag);
		task.remove();
	});

	favDialog.addEventListener('close', () => {
		console.log('close dialog');
	});
	favDialog.showModal();
}

// Create category table section
function createChapter(event) {
	// event stops the default functionality when clicking on the button
	event.preventDefault();

	let categoryForm = document.getElementsByClassName('categoryForm')[0]; // finds the form element
	let categoryText = categoryForm.getElementsByClassName('formInputName')[0].value; // take the form input value

	// create table for the chapter
	let containerForm = document.getElementsByClassName('category')[0];
	let section = document.createElement('section');
	section.classList.add('categoryTable');
	// add drag and drop functionality
	section.draggable = true;
	section.addEventListener('dragstart', (e) => dragStart(e));
	section.addEventListener('dragend', (e) => dragEnd(e));
	section.addEventListener('dragenter', (e) => dragEnter(e));

	// append the table to the html
	containerForm.append(section);

	// create the header for the category
	let titleSection = document.createElement('section');
	titleSection.classList.add('categoryTitle__container');
	let deleteButton = document.createElement('span');
	deleteButton.classList.add('deleteChapter');
	deleteButton.innerHTML = 'x';

	deleteButton.addEventListener('click', (event) => toggleDialog(event, '.categoryTable'));

	let h1 = document.createElement('h1');
	let div = document.createElement('div');
	let span = document.createElement('span');
	h1.append(div);
	div.append(span);

	span.addEventListener('click', (event) => changeChapter(event, 'span'));

	div.id = 'element';
	h1.classList.add('categoryTitle'); //h1 gets chapterTitle styling
	span.innerHTML = categoryText; // insert form input value to table header

	// append elements to each other
	titleSection.append(h1);
	titleSection.append(deleteButton);
	section.append(titleSection);

	// array of category we want as default
	let subTitle = ['TODO', 'IN PROGRESS', 'DONE'];
	section.append(createTaskButton());

	// creates the 3 sections for the category
	for (let i = 0; i < subTitle.length; i++) {
		let subTitleRow = createStageRow(subTitle[i]);
		section.append(subTitleRow);
	}
	// Closes the chapter form and resets the form
	showChapterBox(event);
}

function deleteChapter(event) {
	let category = event.target.closest('.categoryTable');
	category.remove();
}

// Create subtitle row: todo, progress and done
function createStageRow(title) {
	let h4 = document.createElement('h4');
	if (title === 'TODO') {
		h4.classList.add('categoryTodo');
	}
	if (title === 'IN PROGRESS') {
		h4.classList.add('categoryIn-progress');
	}
	if (title === 'DONE') {
		h4.classList.add('categoryDone');
	}
	h4.innerHTML = title;
	return h4;
}

// Create task button
function createTaskButton() {
	// Create html elements
	let section = document.createElement('section');
	let h4 = document.createElement('h4');
	let div = document.createElement('div');
	let button = document.createElement('button');

	// Add class for the elements
	div.classList.add('categoryButton__container');
	button.classList.add('categoryButton');

	// Add value to button
	button.innerHTML = '+ Add task';
	button.addEventListener('click', function (event) {
		showTaskBox(event);
	});

	// Appends the elements to each other
	section.append(h4);
	h4.append(div);
	div.append(button);

	// Returns the button
	return section;
}

//Change introduction
function changeChapter(e, tag, className) {
	let txt = e.target.innerText;
	let element = e.target.closest('#element');

	let input = document.createElement('input');
	input.classList.add('titleInput');
	input.value = txt;
	// when input is unfocused, the input is removed and the span is added back
	input.addEventListener('blur', (e) => spanReset(e, tag, className));

	// when enter is pressed, the blur happend on the input
	input.addEventListener('keypress', (event) => {
		console.log('keypress');
		if (event.key === 'Enter') {
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger the blur event on input
			input.blur();
		}
	});
	element.innerHTML = '';
	element.append(input);
	document.getElementsByClassName('titleInput')[0].focus();
}

function spanReset(e, tag, className) {
	let txt = e.target.value;
	let element = e.target.closest('#element');
	let newTag = document.createElement(tag);
	newTag.addEventListener('click', (event) => changeChapter(event, tag, className));
	newTag.innerHTML = txt;
	newTag.classList.add(className);
	element.innerHTML = '';
	element.append(newTag);
	// element.innerHTML = `<span onclick='changeChapter(event)'> ${txt} </span>`;
}

// drag and drop of chapters ----------------------------------------------------------------------------------------------
let start;
let currentHover;

columns.forEach((column) => {
	column.addEventListener('dragstart', (e) => dragStart(e));
	column.addEventListener('dragend', (e) => dragEnd(e));
	column.addEventListener('dragenter', (e) => dragEnter(e));
});

function dragStart(e) {
	// console.log('drag started');
	columns = document.querySelectorAll('.categoryTable');
	// start value for: start and currentHover
	currentHover = e.target;
	start = e.target;
}

function dragEnd(e) {
	// console.log('drag ended');
	// reset the opacity
	currentHover.style.opacity = '1';

	// find index of start and currentHover table
	let indexOfStart = findindex(start);
	let indexOfCurrentHover = findindex(currentHover);

	// if start is before currentHover, insert start after currentHover
	if (indexOfStart < indexOfCurrentHover) {
		currentHover.parentNode.insertBefore(start, currentHover.nextSibling);
	}
	// if start is after currentHover, insert start before currentHover
	if (indexOfStart > indexOfCurrentHover) {
		currentHover.parentNode.insertBefore(start, currentHover);
	}
}
function findindex(item) {
	for (let i = 0; i < columns.length; i++) {
		if (columns[i] === item) {
			return i;
		}
	}
}
function dragEnter(e) {
	// console.log('drag entered');
	// find the table that is hovered over
	let enterTable = e.target.closest('.categoryTable');

	// if cureentHover is not the same as enterTable
	if (currentHover !== enterTable) {
		// reset the opacity of currentHover
		currentHover.style.opacity = '1';
		// set currentHover to enterTable and sets its opacity to 0.4
		currentHover = enterTable;
		currentHover.style.opacity = '0.4';
	}
}
