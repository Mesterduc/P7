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
}

function getInputValue(event) {
	// A method is used to get input from titel
	event.preventDefault();
	let value = document.getElementsByClassName('form-title')[0]; //get input from titel box
	// console.log(value.value);     // Display the value
	let valuearea = document.getElementsByClassName('task')[0]; //get input from task box
	// console.log(valuearea.value);     // Display the value

	// TODO: Create elements
	// e.g. document.createElement("section");

	// TODO Insert values to elements
	// e.g header.innerHTML = value

	// TODO: Append elements
	// e.g header.append('body')

	// TODO: find table where the created card needs to be and append it
}
