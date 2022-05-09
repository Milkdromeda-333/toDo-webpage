let toDoList = [
	"throw away trash",
	// "pack away outside clothes into a bin",
	// "put away decorations into decrations bag.",
	// "pack away bathroom stuff for new apt",
	// "pack away other bathroom stuff for storage"
]

let needs = ["trash bags"];

/* STEP 1 event listener added to document and points to one of 
two functions*/
document.onkeydown = enterItem;
function enterItem(button){
	if(button.key === 'p') {
	let addedItem = prompt('Enter your to do item');
		addListItem(addedItem);
	} else if (button.key === 'w'){
			let neededItem = prompt('What do you need?');
			addNeededItem(neededItem);
		};
}

/* TO DO ITEMS PROGRAM
This function takes in a string from the event listener enterItem and 
adds a list item element to the DOM and adds an event lister that, 
when clicked, removes the element.*/
function addListItem(toDo){
	let listItem = document.createElement('li');
	listItem.innerHTML = toDo;
	toDoList.push(listItem);
document.getElementById('append').appendChild(listItem);
	listItem.addEventListener('click', function(){
	listItem.remove();
	});
} 

/* NEEDS PROGRAM
This function does the same as addListItem but for the needs list*/
function addNeededItem(neededItem){
 	let listItem = document.createElement('li');
	listItem.innerHTML = neededItem;
	document.getElementById('neededList').appendChild(listItem);
	needs.push(neededItem);
	listItem.addEventListener('click', ()=> listItem.remove());
 }

/* These two statements runs each element in the arrays through
their respective functions*/
toDoList.forEach(addListItem);
needs.forEach(addNeededItem);

/* Reset buttons */
let toDoResetbtn = document.getElementById('toDoReset');
let needsResetbtn = document.getElementById('needsReset');

//event listeners to reset the lists
toDoResetbtn.onclick = resetToDo;
needsResetbtn.onclick = resetNeeds;

/*These two event handlers select the list and delete its children*/
function resetToDo(){
	let list = document.getElementById('append')
	while(list.firstChild){
		list.removeChild(list.firstChild);
		};
}
function resetNeeds(){
	let list = document.getElementById('neededList');
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}
}
