let needToDo = [
	"throw away trash",
	"pack away outside clothes into a bin",
	"put away decorations into decrations bag.",
	"pack away bathroom stuff for new apt",
	"pack away other bathroom stuff for storage"
]

function addListItem(toDo){
	let listItem = document.createElement('li');
	listItem.innerHTML = toDo;
document.getElementById('append').appendChild(listItem);
	listItem.addEventListener('click', function(){
	listItem.remove();
	});
} // This function takes in a string and adds a list item element to the DOM and adds an event lister that, when clicked, removes the element.

needToDo.forEach(addListItem); // this calls the function for each element in the array.

addListItem('wash dishes'); // this adds a list item to he array and is directly added to the list on the DOM.

document.onkeydown = enterItem;

function enterItem(button){
	if(button.key === 'p') {
	let addedItem = prompt('Enter your to do item');
		addListItem(addedItem);
		
	};
} // This function Has you to press p to add a new list iteem by checking if the value is P and then prompting for you to add your item and then sends it to the addItem function.