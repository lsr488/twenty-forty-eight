// begin with 2 tiles placed randomly, each with value of 2
// all tiles move in the direction of the arrow press (it's NOT per tile)
// if adjacent tiles in direction of movement, add values together
// each tile has a value and a location
// each square of the grid needs to have a static location name

const valueToWord = [
	{
		"value": 2,
		"word": "two",
	},
	{
		"value": 4,
		"word": "four",
	},
	{
		"value": 8,
		"word": "eight",
	},
	{
		"value": 16,
		"word": "sixteen",
	},
	{
		"value": 32,
		"word": "thirty-two",
	},
	{
		"value": 64,
		"word": "sixty-four",
	},
	{
		"value": 128,
		"word": "one-twenty-eight",
	},
	{
		"value": 256,
		"word": "two-fifty-six",
	},
	{
		"value": 512,
		"word": "five-twelve",
	},
	{
		"value": 1024,
		"word": "ten-twenty-four",
	},
	{
		"value": 2048,
		"word": "twenty-forty-eight",
	},
];

let gameGrid = [
	{
		"location": 0,
		"value": null,
	},
	{
		"location": 1,
		"value": null,
	},	{
		"location": 2,
		"value": null,
	},	{
		"location": 3,
		"value": null,
	},
	{
		"location": 4,
		"value": null,
	},
	{
		"location": 5,
		"value": 2,
	},
	{
		"location": 6,
		"value": null,
	},
	{
		"location": 7,
		"value": null,
	},
	{
		"location": 8,
		"value": null,
	},
	{
		"location": 9,
		"value": null,
	},
	{
		"location": 10,
		"value": null,
	},
	{
		"location": 11,
		"value": null,
	},
	{
		"location": 12,
		"value": null,
	},
	{
		"location": 13,
		"value": null,
	},
	{
		"location": 14,
		"value": null,
	},
	{
		"location": 15,
		"value": null,
	},
];

const grid = document.createElement("div");
grid.setAttribute("class", "grid");
game.appendChild(grid);


function createBoxes() {
	gameGrid.forEach(item => {
		const box = document.createElement("div");
		box.classList.add("box");
		box.id = item.location;
		box.textContent = item.location; // DELETE ME
		// box.textContent = item.value; // DEFAULT KEEP ME
		grid.appendChild(box);

		assignColorClass(item, box);
	});
}

document.addEventListener("keydown", function(event) {
	// ArrowRight
	if(event.code === "ArrowRight") {
		console.log("right arrow");
	}

	// ArrowLeft
	if(event.code === "ArrowLeft") {
		console.log("left arrow");
	}

	// ArrowUp
	if(event.code === "ArrowUp") {
		console.log("up arrow");
	}

	// ArrowDown
	if(event.code === "ArrowDown") {
		console.log("down arrow");
	}
});

// this function ONLY works when called within createBoxes() due to gameGrid.forEach loop
function assignColorClass(item, box) {
	// if item.value is not null, add corresponding color class
	if(item.value != null) {
		for(var i = 0; i < valueToWord.length; i++) {
			if(item.value === valueToWord[i].value) {
				box.classList.add(valueToWord[i].word);
			}		
		}
	}
	// if item.value IS null, display background color and remove displayed value
	// if(item.value === null) { // KEEP ME
	// 	box.setAttribute("class", "box"); // KEEP ME
	// 	box.textContent = ""; // KEEP ME
	// } // KEEP ME
}

// use box's textContent as index to access gameGrid location and value
// if the box has a value, check if the box in the direction of the key press has a value
	// if the adjacent box doesn't have a value, move the current value to the new location
		// how keep going to the end of the grid?
	// if the adjacent box does have a value, check if the current value and the adjacent value are the same
		// if the values are the same, add them together and change color

function moveLeft(gameGrid) {

}

// RENDER GAME
createBoxes();
