// let element = document.getElementById('myBtn');
// element.addEventListener('click', myFunction);
// function myFunction() {
// 	alert('Hello World!');
// }

// let button = document.getElementsByClassName('add-task');
// button.addEventListener('click', showModal);

function showModal() {
	let form = document.getElementsByClassName('form')[0];
	form.classList.toggle('showModal');
	// form.classList.add('showModal');
	let title = form.getElementsByClassName('form-title')[0];
// 	let formElement = document.getElementsByClassName('form-title')[0]; //get input from titel box
// 	// console.log(value.value);     // Display the value
// 	let formTextarea = document.getElementsByClassName('task')[0]; //get input from task box
// 	// console.log(valuearea.value);     // Display the value
// 	formElement.innerHTML = "";
// 	formTextarea.innerHTML = "";
// }

function getInputValue(event) {
	// A method is used to get input from titel
	event.preventDefault();
	let formElement = document.getElementsByClassName('form-title')[0]; //get input from titel box
	// console.log(value.value);     // Display the value
	let formTextarea = document.getElementsByClassName('task')[0]; //get input from task box
	// console.log(valuearea.value);     // Display the value

	//Implement the taskbox (section) from HTLM and define it as taskbox in script
	let taskbox = document.createElement("section"); //Define the taskbox created in HTML section
	taskbox.classList.add("id", "mySection");
    document.body.append(taskbox);

	let h4 = document.createElement("h4"); //Users input in formElement (title) will show on the screen 
	taskbox.append(h4);
	h4.innerHTML = formElement.value;

	let h5 = document.createElement("h5"); //Users input in formTextarea (Task describtion) will show on the screen
	taskbox.append(h5);
	h5.innerHTML = formTextarea.value;
} 



	// TODO Insert values to elements
	// e.g header.innerHTML = value

	// TODO: Append elements
	// e.g header.append('body')

	// TODO: find table where the created card needs to be and append it
