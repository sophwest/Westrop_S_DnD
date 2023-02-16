// select your elements first - what is the user going to interact with?
// these are the targets, what the "user" uses

// this is a 1 to 1 connecton to an element in the DOM
// let navButtons = document.querySelector("#buttonOne");

// this is a 1 to many connecton to elements in the DOM
let navButtons = document.querySelectorAll('#buttonHolder img'),
theHeadLine = document.querySelector('#headLine h1'),
//collect all of the draggable pieces in the drag zone
puzzlePieces = document.querySelectorAll ('.puzzle-pieces img'),
//collect ALL of the drop zone elements
dropZones = document.querySelectorAll('.drop-zone'),
puzzleBoard = document.querySelector('.puzzle-board'),
// tempLink = document.querySelector('a'),
//set up a global variable to store a reference to the drag piece
//i need to know this later when i drop it on a zone
draggedPiece;

// functions go in the middle
// these are the "actions" that should happen
function changeBGImage() {
	// let newBGPath = "images/backGround" + this.id + ".jpg"
	// debugger;
	// object.property = "new value"
	// theHeadLine.textContent = "Drag and Drop is so fun!";
	// theHeadLine.classList.add("yellow");

	// change the background image in the dropzone
	// puzzleBoard.style.backgroundImage = "url('images/backGround'" + this.id + "'.jpg')";
	
	// the `${}` is called a Javascript Template String - whatever sis inside the curly braces is evaluated at runtime and interpolated (replaces the bracket notation)
	//you can use variables, functions, etc inline in your code this way
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag () { 
	console.log('started draggin a piece!', this); 
	//store the element I am currently dragging in that global draggedPiece variable
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault();
	console.log('dragging over me!'); 
}

function handleDrop(e) { 
	e.preventDefault();
	console.log('dropped something on me');
	if (!this.hasChildNodes()) {
        this.appendChild(draggedPiece);
    }
}

// function blockDefaultBehaviour(e) { 
// 	//dont let the default behaviour of certain elements happen- block it
// 	//e is short for event, in this case the nav event
// 	e.preventDefault();
// }

// event handling at the bottom - how is the user going to interact w the elements/controls you provide?
// this is how things react when you interact with them

// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));

//add the drag start handler to all of the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

//add the dragover handling to the drop zones
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

//temp handling
// tempLink.addEventListener('click', blockDefaultBehaviour);