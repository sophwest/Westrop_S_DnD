// select your elements first - what is the user going to interact with?
// these are the targets, what the "user" uses

// this is a 1 to many connecton to elements in the DOM
let navButtons = document.querySelectorAll('#buttonHolder img'),
theHeadLine = document.querySelector('#headLine h1'),
//collect all of the draggable pieces in the drag zone
puzzlePieces = document.querySelectorAll ('.puzzle-pieces img'),
//collect ALL of the drop zone elements
dropZones = document.querySelectorAll('.drop-zone'),
puzzleBoard = document.querySelector('.puzzle-board'),

//trying this - yay it worked omg
puzzlePieceCon = document.querySelector ('.puzzle-pieces'),

tempLink = document.querySelector('a'),
//set up a global variable to store a reference to the drag piece
//i need to know this later when i drop it on a zone
draggedPiece;

// functions go in the middle
// these are the "actions" that should happen
function changeBGImage() {
	// change the background image in the dropzone
	// the `${}` is called a Javascript Template String - whatever sis inside the curly braces is evaluated at runtime and interpolated (replaces the bracket notation)
	//you can use variables, functions, etc inline in your code this way

	//trying this - yay it worked. call the reset puzzle function before changing the image
	resetPuzzle();

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

//trying this - yay it worked. resets the puzzle, sends the pieces back to the container
function resetPuzzle() {
	dropZones.forEach(zone => {
		while (zone.firstChild) {
			puzzlePieceCon.appendChild(zone.firstChild);
		}
	})
}

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
tempLink.addEventListener('click', blockDefaultBehaviour);