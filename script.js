"use strict"

const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

squares.forEach(square => {
	square.addEventListener('click', handleClick);
});

function handleClick(event) {
	const square = event.target;
	const squareNumber = square.getAttribute('data-square');
	if (square.innerHTML !== '') {
		return;
	}
	square.innerHTML = currentPlayer;
	checkForWinner();
	switchPlayer();
}

function checkForWinner() {
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i <winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		if (squares[a].innerHTML !== '' && squares[a].innerHTML === squares[b].innerHTML && squares[b].innerHTML === squares[c].innerHTML) {
			alert(`${currentPlayer} ganhou!`);
			resetGame();
			return;
		}
	}
}

function switchPlayer() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
	squares.forEach(square => square.innerHTML = '');
	currentPlayer = 'X';
}