const startBtn = document.getElementById('startGame');
const resetBtn = document.getElementById('resetBtn');
let boxes = document.querySelectorAll('.col-4');
// Sqaures
const sq1 = document.getElementById('sq1');
const sq2 = document.getElementById('sq2');
const sq3 = document.getElementById('sq3');
const sq4 = document.getElementById('sq4');
const sq5 = document.getElementById('sq5');
const sq6 = document.getElementById('sq6');
const sq7 = document.getElementById('sq7');
const sq8 = document.getElementById('sq8');
const sq9 = document.getElementById('sq9');

// boxes = Array.from(boxes)
let complete = false;
// counter when ever this function is Invoked turn increases by 1
let turn = 0;
console.log(turn);
function counting() {
	turn++;
	return turn;
}

//returns X or O depending on the turn if turn is even or odd
const playerTurn = (turn) => {
	if (turn % 2 === 0) {
		return 'x';
	} else {
		return 'o';
	}
};

//passes in a square param and adds the X or O in to the text content of the html
function XtoO(sq) {
	if (sq.innerText === '' && complete === false) {
		sq.textContent = playerTurn(turn);
		winningCondition();
		return counting();
	}
}

startBtn.addEventListener('click', () => {
	//adds event listener to each square and bind the function
	//to the element so we can pass it in
	sq1.addEventListener('click', XtoO.bind(this, sq1));
	sq2.addEventListener('click', XtoO.bind(this, sq2));
	sq3.addEventListener('click', XtoO.bind(this, sq3));
	sq4.addEventListener('click', XtoO.bind(this, sq4));
	sq5.addEventListener('click', XtoO.bind(this, sq5));
	sq6.addEventListener('click', XtoO.bind(this, sq6));
	sq7.addEventListener('click', XtoO.bind(this, sq7));
	sq8.addEventListener('click', XtoO.bind(this, sq8));
	sq9.addEventListener('click', XtoO.bind(this, sq9));
});

function winningCondition() {
	if (
		(sq1.innerText === 'x' && sq2.innerText === 'x' && sq3.innerText === 'x') ||
		(sq4.innerText === 'x' && sq5.innerText === 'x' && sq6.innerText === 'x') ||
		(sq7.innerText === 'x' && sq8.innerText === 'x' && sq9.innerText === 'x') ||
		(sq1.innerText === 'x' && sq5.innerText === 'x' && sq9.innerText === 'x') ||
		(sq7.innerText === 'x' && sq5.innerText === 'x' && sq3.innerText === 'x') ||
		(sq1.innerText === 'x' && sq4.innerText === 'x' && sq7.innerText === 'x') ||
		(sq2.innerText === 'x' && sq5.innerText === 'x' && sq8.innerText === 'x') ||
		(sq3.innerText === 'x' && sq6.innerText === 'x' && sq9.innerText === 'x')
	) {
		console.log('X wins');
		console.log(turn);
		complete = true;
	} else if (
		(sq1.innerText === 'o' && sq2.innerText === 'o' && sq3.innerText === 'o') ||
		(sq4.innerText === 'o' && sq5.innerText === 'o' && sq6.innerText === 'o') ||
		(sq7.innerText === 'o' && sq8.innerText === 'o' && sq9.innerText === 'o') ||
		(sq1.innerText === 'o' && sq5.innerText === 'o' && sq9.innerText === 'o') ||
		(sq7.innerText === 'o' && sq5.innerText === 'o' && sq3.innerText === 'o') ||
		(sq1.innerText === 'o' && sq4.innerText === 'o' && sq7.innerText === 'o') ||
		(sq2.innerText === 'o' && sq5.innerText === 'o' && sq8.innerText === 'o') ||
		(sq3.innerText === 'o' && sq6.innerText === 'o' && sq9.innerText === 'o')
	) {
		console.log('O wins');
		console.log(turn);
		complete = true;
	} else if (turn === 8) {
		console.log('Tie Game!');
		console.log(turn);
		complete = true;
	} else {
		console.log('Play Again!');
		console.log(turn);
	}
}
function resetBoard() {
	boxes.forEach((box) => {
		box.innerText = '';
		console.log('removed');
		turn = 0;
		complete = false;
	});
	return turn;
}
resetBtn.addEventListener('click', resetBoard);
