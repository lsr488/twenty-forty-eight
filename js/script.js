// all tiles move in the direction of the arrow press (it's NOT per tile)
// if adjacent tiles in direction of movement have same value, add values together
// add 1 new 2-tile to the game after movement

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
		"value": 2,
	},
	{
		"location": 1,
		"value": 4,
	},	{
		"location": 2,
		"value": 2,
	},	{
		"location": 3,
		"value": 2,
	},
	{
		"location": 4,
		"value": null,
	},
	{
		"location": 5,
		"value": null,
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

document.addEventListener("keydown", function(event) {
	// ArrowRight
	if(event.code === "ArrowRight") {
		console.log("right arrow");
	}

	// ArrowLeft
	if(event.code === "ArrowLeft") {
		console.log("left arrow");
		moveLeft();
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

function createBoxes() {
	gameGrid.forEach(item => {
		const box = document.createElement("div");
		box.classList.add("box");
		box.id = item.location;
		// box.textContent = item.location; // DELETE ME
		box.textContent = item.value; // DEFAULT KEEP ME
		grid.appendChild(box);

		// assignColorClass(item, box);
	});
}

// this function ONLY works when called within createBoxes() due to gameGrid.forEach loop
// DELETE FUNCTION? create a new, more general one?
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
	if(item.value === null) { // KEEP ME
		box.setAttribute("class", "box"); // KEEP ME
		box.textContent = ""; // KEEP ME
	} // KEEP ME
}

// add 2 2-values to the gameGrid; new boxes always start at 2
function initialGeneration() {
	for(var h = 0; h < 2; h++) {
		// generate the location
		let assignedLocation = Math.floor(Math.random() * Math.floor(16));
		console.log("Assigned Location:", assignedLocation); // DELETE ME
		// console.log(gameGrid[assignedLocation]); // DELETE ME
		// console.log(gameGrid[assignedLocation].location); // DELETE ME
		// console.log(gameGrid[assignedLocation].value); // DELETE ME

		// generates new location if duplicate
		if(doesLocationHaveValue(assignedLocation) === true) {
			assignedLocation = Math.floor(Math.random() * Math.floor(16));
			console.log("NEW assignedLocation", assignedLocation); // DELETE ME
		}

		// assign 2-value to the location in gameGrid
		for(var i = 0; i < gameGrid.length; i++) {
			if(assignedLocation === gameGrid[i].location) {
				gameGrid[i].value = 2;
				// console.log("Location:", assignedLocation); // DELETE ME
				// console.log("Value:", gameGrid[i].value);	 // DELETE ME
			}
		}
	
		// display value in the correct square
		document.getElementById(assignedLocation).textContent = gameGrid[assignedLocation].value;

		// change color based on value in square
		let currentBox = document.getElementById(assignedLocation);
	
		// convert value to words
		for(var j = 0; j < valueToWord.length; j++) {
			for(var k = 0; k < gameGrid.length; k++) {
				if(gameGrid[k].value === valueToWord[j].value) {
					// console.log("gameGrid value:", gameGrid[k].value); // DELETE ME
					// console.log("valueToWord value:", valueToWord[j].word); // DELETE ME

					// add class to element
					currentBox.classList.add(valueToWord[j].word);
				}
			}
		}
	}
}

function doesLocationHaveValue(location) {
	if(gameGrid[location].value > 0) {
		console.log("gameGrid object:", gameGrid[location]);
		console.log("value DOES exist in this location");
		// console.log("Location:", gameGrid[assignedLocation].location); // DELETE ME
		// console.log("Value:", gameGrid[assignedLocation].value); // DELETE ME
		return true;
	}

	if(gameGrid[location].value === null) {
		console.log("gameGrid object:", gameGrid[location]);
		console.log("value does NOT exist in this location");
		// console.log("Location:", gameGrid[assignedLocation].location); // DELETE ME
		// console.log("Value:", gameGrid[assignedLocation].value); // DELETE ME
		return false;
	}
}

function moveLeft() {
	let occupiedBoxes = [];
	// check for box occupation
	for(var i = 0; i < gameGrid.length; i++) {
		if(gameGrid[i].value) {
			console.log("Location " + gameGrid[i].location + " is not empty. The value is " + gameGrid[i].value);
			occupiedBoxes.push(gameGrid[i]);
			console.log("occupiedBoxes:", occupiedBoxes);
		}
	}

	// check if left-adjacent box has value
	for(var i = 0; i < occupiedBoxes.length; i++) {
		// first row
		if(occupiedBoxes[i].location < 4 && occupiedBoxes[i].location > 0) {
			let result = occupiedBoxes[i].location - gameGrid[0].location;
			console.log("current location - first box of row = ", result);

			let leftAdjacent = occupiedBoxes[i].location - 1;
			console.log("Location of left-adjacent:", leftAdjacent);

			if(doesLocationHaveValue(leftAdjacent)) {
				console.log("leftAdjacent value:", gameGrid[leftAdjacent].value);
				console.log("current value:", occupiedBoxes[i].value);
				if(gameGrid[leftAdjacent].value === occupiedBoxes[i].value) {
					gameGrid[leftAdjacent].value = gameGrid[leftAdjacent].value + occupiedBoxes[i].value;
					console.log("new leftAdjacent value:", gameGrid[leftAdjacent].value);
					var leftAdjacentBox = document.getElementById(gameGrid[leftAdjacent].location);
					leftAdjacentBox.textContent = gameGrid[leftAdjacent].value;
					document.getElementById(occupiedBoxes[i].location).textContent = null;
				} else {
					console.log("values don't match");
				}
			}

		}
	}

	// use box's id as index to access gameGrid location and value
	// if the box has a value, check if the box in the direction of the key press has a value
		// if the adjacent box doesn't have a value, move the current value to the new location
			// how keep going to the end of the grid?
		// if the adjacent box does have a value, check if the current value and the adjacent value are the same
			// if the values are the same, add them together and change color
}


// RENDER GAME
createBoxes();
// initialGeneration();
