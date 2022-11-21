let chosenSection;

// open, closing and restet the task modal
function showTaskBox(event) {
	// event shows where we click the button
	if (event) {
		// finds parent with class of .TableColor
		chosenSection = event.target.closest('.TableColor');
	}
	let form = document.getElementsByClassName('form')[0];
	// toggle the class for the elements
	form.classList.toggle('showTaskBox');
	form.reset();
}

// Create new task, with the value we get from the modal
function getInputValue(event) {
	// stops the default funtionality when clicking on the button
	event.preventDefault();
	let formElement = document.getElementsByClassName('form-title')[0]; //get input from titel box
	let formTextarea = document.getElementsByClassName('task')[0]; //get input from task box   // Display the value

	//Implement the taskbox (section) from HTLM and define it as taskbox in script
	let taskbox = document.createElement('section'); // Create the container for taskbox, created in HTML section
	taskbox.classList.add('id', 'mySection'); // Class for section
	taskbox.classList.add('Box');

	// Task Header ----------------------------------------
	// task title
	let h4 = document.createElement('h4'); //Users input in formElement (title) will show on the screen
	taskbox.append(h4);
	// Sets the h4 value
	h4.innerHTML = formElement.value;
	h4.classList.add('Box');

	// task description
	let h5 = document.createElement('h5'); //Users input in formTextarea (Task describtion) will show on the screen
	taskbox.append(h5);
	// Sets the h5 value
	h5.innerHTML = formTextarea.value;

	// Task Buttons ----------------------------------------

	// In progress button
	//to make a checkbox window
	let button = document.createElement('input');
	button.type = 'checkbox';
	button.value = 'Submit';
	button.className = 'btn';

	taskbox.append(button);

	let checkboxInProgress = document.createElement('InProgress');
	taskbox.append(checkboxInProgress);
	checkboxInProgress.innerHTML = 'In progress';

	// Done button
	//to make the second checkbox window
	let button2 = document.createElement('input');
	button2.type = 'checkbox';
	button2.value = 'Submit';
	button2.className = 'btn';

	checkboxInProgress.append(button2);

	let checkboxDone = document.createElement('Done');
	checkboxInProgress.append(checkboxDone);
	checkboxDone.innerHTML = 'Done';

	// Append the task to the right section
	let todo = chosenSection.getElementsByClassName('toDo')[0]; // finds where we need to put the task box
	todo.append(taskbox); // Append the task to the todo section

	// closes the modal and restes the form
	showTaskBox();
}

// Open and closing the category modal
function showTaskCategory() {
	let form = document.getElementsByClassName('category-form')[0];
	form.classList.toggle('showCategoryBox');
	form.reset();
}

// Create category section
function getCategoryValue(event) {
	// A method is used to get input from titel
	event.preventDefault();

	// find form element
	// take the form input value
	let categoryForm = document.getElementsByClassName('category-form')[0];
	let categoryText = categoryForm.getElementsByClassName('form-title')[0].value;

	let containerForm = document.getElementsByClassName('container')[0];

	// create table for the category
	let section = document.createElement('section');
	section.classList.add('TableColor', 'categoryBorders');

	// append the table to the html
	containerForm.append(section);
	let h1 = document.createElement('h1');
	let h4 = document.createElement('h4');

	h1.classList.add('TitleColor'); //h1 gets TitleColor styling

	// insert form input value to table header
	h1.innerHTML = categoryText;

	// append elements to each other
	section.append(h1);
	section.append(h4);

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

	showTaskCategory();
}

// Create todo, progress and done
function createTableRow(title) {
	let section = document.createElement('section');
	let h4 = document.createElement('h4');

	h4.innerHTML = title;
	section.append(h4);

	return section; //returning the tr scope
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
	div.classList.add('center');
	button.classList.add('btn', 'btn--primary', 'add-task');

	// Add value to button
	button.innerHTML = '+ Add task';

	// Appends the elements to each other
	section.append(h1);
	h1.append(h4);
	h4.append(div);
	div.append(button);

	// Returns the button
	return section;
}
