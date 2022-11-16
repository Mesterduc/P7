function showTaskBox() {
	let form = document.getElementsByClassName('form')[0];
	form.classList.toggle('showTaskBox');
	form.reset();
}

function getInputValue(event) {
	// A method is used to get input from titel
	event.preventDefault();
	let formElement = document.getElementsByClassName('form-title')[0]; //get input from titel box
	// console.log(value.value);     // Display the value
	let formTextarea = document.getElementsByClassName('task')[0]; //get input from task box
	// console.log(valuearea.value);     // Display the value

	let todo = document.getElementsByClassName('toDo')[0];

	//Implement the taskbox (section) from HTLM and define it as taskbox in script
	let taskbox = document.createElement('section'); //Define the taskbox created in HTML section
	taskbox.classList.add('id', 'mySection');
	todo.append(taskbox);

	let h4 = document.createElement('h4'); //Users input in formElement (title) will show on the screen
	taskbox.append(h4);
	h4.innerHTML = formElement.value;

	let h5 = document.createElement('h5'); //Users input in formTextarea (Task describtion) will show on the screen
	taskbox.append(h5);
	h5.innerHTML = formTextarea.value;

	//to make a checkbox window
	let button = document.createElement('input');
	button.type = 'checkbox';
	button.id = 'submit';
	button.value = 'Submit';
	button.className = 'btn';

	taskbox.append(button);

	let checkboxInProgress = document.createElement('InProgress');
	taskbox.append(checkboxInProgress);
	checkboxInProgress.innerHTML = 'In progress';

	//to make the second checkbox window
	let button2 = document.createElement('input');
	button2.type = 'checkbox';
	button2.id = 'submit';
	button2.value = 'Submit';
	button2.className = 'btn';

	checkboxInProgress.append(button2);

	let checkboxDone = document.createElement('Done');
	checkboxInProgress.append(checkboxDone);
	checkboxDone.innerHTML = 'Done';

	showTaskBox();
}

function showTaskCategory() {
	let form = document.getElementsByClassName('category-form')[0];
	form.classList.toggle('showCategoryBox');
	form.reset();
}

function getCategoryValue(event) {
	// A method is used to get input from titel
	event.preventDefault();

	// find form element
	// take the form input value
	let categoryForm = document.getElementsByClassName('category-form')[0];
	let categoryText = categoryForm.getElementsByClassName('form-title')[0].value;
	
	let containerForm = document.getElementsByClassName('container')[0];
	


	// create table for the category
	let table = document.createElement('table');
	table.classList.add('TableColor');
	
	// append the table to the html
	containerForm.append(table);
	let tr = document.createElement('tr');
	let th = document.createElement('th');
	let h1 = document.createElement('h1');

	h1.classList.add('TitleColor'); //h1 gets TitleColor styling
	
	// insert form input value to table header
	h1.innerHTML = categoryText;

	// append elements to each other
	table.append(tr);
	tr.append(th);
	th.append(h1);

	let subTitle = ["Todo", "In progress", "Done"]

	for (let i = 0; i < subTitle.length; i++) {
		table.append(createTableRow(subTitle[i]));
	}

	showTaskCategory();
}

// create with todo, progress and done
function createTableRow(title) {
let tr = document.createElement('tr');
let td = document.createElement('td');
let h4 = document.createElement('h4');

h4.innerHTML = title;
tr.append(td);
td.append(h4);

return tr; //returning the tr scope 


}

	

// 	let h4 = document.createElement('table'); //Users input in formElement (title) will show on the screen
// 	categoryBox.append(h4);
// 	h4.innerHTML = formCategory.value;
// 	showTaskCategory();
// }

// let formInput = formCategory.querySelector('form-title');

// 	let categoryBox = document.createElement('form'); //Define the taskbox created in HTML section
// 	categoryBox.classList.add('id', 'mySection');
// 	document.body.append(categoryBox);
