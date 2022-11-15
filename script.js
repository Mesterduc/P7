
function showTaskBox() {
	let form = document.getElementsByClassName('form')[0];
	form.classList.toggle('showTaskBox');
	// form.classList.add('showTaskBox');
}

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

	//to make a checkbox window
	let button = document.createElement ("input");
	button.type = "checkbox";
	button.id = "submit";
	button.value = "Submit";
	button.className = "btn";

	button.onclick = function () {
		style.color = "blue";
	};
	taskbox.append(button);

	let checkboxInProgress = document.createElement("InProgress");
	taskbox.append(checkboxInProgress);
	checkboxInProgress.innerHTML = "In progress";

	//to make the second checkbox window
	let button2 = document.createElement ("input");
	button2.type = "checkbox";
	button2.id = "submit";
	button2.value = "Submit";
	button2.className = "btn";

	button2.onclick = function () {
		style.color = "blue";
	};
	checkboxInProgress.append(button2);

	let checkboxDone = document.createElement("Done");
	checkboxInProgress.append(checkboxDone);
	checkboxDone.innerHTML = "Done";

	showTaskBox();
}
