let chosenSection;
let users = [];

//to get the initials from users
function getNameInput(event) {
	//get input from titel box
	let formTextarea = document.getElementsByClassName('task')[0]; //get input from task box

	//Implement the taskbox (section) from HTLM and define it as taskbox in script
	let taskbox = document.createElement('section'); // Create the container for taskbox, created in HTML section
	taskbox.classList.add('id', 'mySection'); // Class for section
	taskbox.classList.add('Box');

	// Task Header ----------------------------------------
	// task title
	let h4 = document.createElement('h4'); //Users input in formElement (title) will show on the screen
	taskbox.append(h4);
	// Sets the h4 value
	h4.innerHTML = "Write the all group members' initials";
	h4.classList.add('BoxForTitle');

	// task description
	let h5 = document.createElement('h5'); //Users input in formTextarea (Task describtion) will show on the screen
	taskbox.append(h5);
	// Sets the h5 value
	h5.innerHTML = formTextarea.value;
}
/* ------------------- Create members form --------------------------- */
function addMemberToForm() {
	let member = document.getElementsByClassName('memberInput')[0];

	let memberInput = document.createElement('Input');
	member.append(memberInput);

	// Input class, type, input maxlength and placeholder
	memberInput.classList.add('names');
	memberInput.type = 'text';
	memberInput.maxLength = '4';
	// names findes all elements with class "names"
	let name = document.getElementsByClassName('names');
	memberInput.placeholder = 'Member ' + name.length;
}

function createMembers() {
	let name = document.getElementsByClassName('names');
	//to set names into checkbox
	for (let i = 0; i < name.length; i++) {
		// const element = array[i];
		if (name[i].value != '') {
			users.push(name[i].value);
		}
	}

	let createMembersForm = document.getElementsByClassName('createMembers')[0];

	createMembersForm.classList.toggle('hideBox');
}

// open, closing and restet the task modal
function showTaskBox(event) {
	// event shows where we click the button
	if (event) {
		// finds parent with class of .TableColor
		chosenSection = event.target.closest('.categoryTable');
	}
	let createTask = document.getElementsByClassName('createTask__container')[0];
	let form = document.getElementsByClassName('taskform')[0];
	// toggle the class for hidding the elements
	createTask.classList.toggle('hideBox');
	form.reset();
}

// Create new task, with the value we get from the modal
function getInputValue(event) {
	// stops the default funtionality when clicking on the button
	event.preventDefault();
	let formElement = document.getElementsByClassName('createTaskInputName')[0]; //get input from titel box
	let formTextarea = document.getElementsByClassName('createTaskTextarea')[0]; //get input from task box

	//Implement the taskbox (section) from HTLM and define it as taskbox in script
	let taskbox = document.createElement('section'); // Create the container for taskbox, created in HTML section
	// taskbox.classList.add('id', 'mySection'); // Class for section
	taskbox.classList.add('taskbox');

	// Task Header ----------------------------------------
	// task title
	let h4 = document.createElement('h4'); //Users input in formElement (title) will show on the screen
	taskbox.append(h4);
	// Sets the h4 value
	h4.innerHTML = formElement.value;
	h4.classList.add('taskboxTitle');

	// task description
	let h5 = document.createElement('h5'); //Users input in formTextarea (Task describtion) will show on the screen
	taskbox.append(h5);
	// Sets the h5 value
	h5.innerHTML = formTextarea.value;
	//to make a checkbox window

	taskbox.append(dropdown());
	let checkBoxContainer = document.createElement('section');

	for (let i = 0; i < users.length; i++) {
		checkBoxContainer.classList.add('checkBox__container');
		let checkBox = document.createElement('div');
		let span = document.createElement('span');
		let button = document.createElement('input');
		button.type = 'checkbox';
		checkBox.classList.add('checkBox');
		button.className = 'btn';

		checkBoxContainer.append(checkBox);
		checkBox.append(button);
		checkBox.append(span);
		span.innerHTML = users[i];
		taskbox.append(checkBoxContainer);
	}

	// Append the task to the right section
	let todo = chosenSection.getElementsByClassName('categoryTodo')[0]; // finds where we need to put the task box
	todo.append(taskbox); // Append the task to the todo section

	// closes the taskbox and restes the form
	showTaskBox();
}

// Open and closing the category box ('add category')
function showTaskCategory() {
	let formContainer = document.getElementsByClassName('createCategory__container')[0];
	let form = document.getElementsByClassName('categoryForm')[0];

	formContainer.classList.toggle('hideBox');
	form.reset();
}

// Create category section
function getCategoryValue(event) {
	// A method is used to get input from titel
	event.preventDefault();

	// find form element
	// take the form input value
	let categoryForm = document.getElementsByClassName('categoryForm')[0];
	let categoryText = categoryForm.getElementsByClassName('formInputName')[0].value;

	let containerForm = document.getElementsByClassName('category')[0];

	// create table for the category
	let section = document.createElement('section');
	section.classList.add('categoryTable');

	// append the table to the html
	containerForm.append(section);
	let h1 = document.createElement('h1');

	h1.classList.add('categoryTitle'); //h1 gets categoryTitle styling

	// insert form input value to table header
	h1.innerHTML = categoryText;

	// append elements to each other
	section.append(h1);

	// array of category we want as default
	let subTitle = ['TODO', 'IN PROGRESS', 'DONE'];

	for (let i = 0; i < subTitle.length; i++) {
		let row = createTableRow(subTitle[i]);
		section.append(row);

		// If the the element in the subTitle array is equel 'TODO' it creates the button to add task for the section
		if (subTitle[i] === 'TODO') {
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
	const copy = event.target.closest('.Box');
	const parent = event.target.closest('.categoryTable');
	if (event.target.value === 'IN PROGRESS') {
		let inProgress = parent.getElementsByClassName('categoryIn-progress')[0];
		inProgress.append(copy);
	}
	if (event.target.value === 'DONE') {
		let done = parent.getElementsByClassName('categoryDone')[0];
		done.append(copy);
	}
	if (event.target.value === 'TODO') {
		let todo = parent.getElementsByClassName('categoryTodo')[0];
		todo.append(copy);
	}
}

//to make a dropdown box with 3 options to choose between
function dropdown() {
	let subTitle = ['TODO', 'IN PROGRESS', 'DONE'];

	let select = document.createElement('select');
	select.name = 'choices';
	select.id = 'choices';

	for (const val of subTitle) {
		//loop between 'TODO', 'IN PROGRESS' and 'DONE'
		let option = document.createElement('option');
		option.value = val;
		option.text = val;
		select.appendChild(option);
	}

	select.addEventListener('change', (event) => {
		moveTaskBox(event);
	});
	return select;
}

// Create todo, progress and done
function createTableRow(title) {
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
	let h1 = document.createElement('h1');
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
	section.append(h1);
	h1.append(h4);
	h4.append(div);
	div.append(button);

	// Returns the button
	return section;
}
