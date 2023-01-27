// select your elements first - what is the user going to interact with?
// these are the targets, what the "user" uses

// this is a 1 to 1 connecton to an element in the DOM
// let navButtons = document.querySelector("#buttonOne");

// this is a 1 to many connecton to elements in the DOM
let navButtons = document.querySelectorAll("#buttonHolder img"),
theHeadLine = document.querySelector("#headLine h1"),
puzzleBoard = document.querySelector(".puzzle-board");

// functions go in the middle
// these are the "actions" that should happen
function changeBGImage() {
	debugger;
	// object.property = "new value"
	// theHeadLine.textContent = "Drag and Drop is so fun!";
	// theHeadLine.classList.add("yellow");

	// change the background image in the dropzone
	puzzleBoard.style.backgroundImage = 'url("../images/backGround"' + this.id + '".jpg")';
}

// event handling at the bottom - how is the user going to interact w the elements/controls you provide?
// this is how things react when you interact with them

// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener("click", changeBGImage));