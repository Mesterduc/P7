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
	// title.innerHTML = 'hello';
}
