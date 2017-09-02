'use strict';

var printboard = function printboard(board) {
	console.log(board.map(function (row) {
		return row.join('| ');
	}).join('\n'));
};
/*const board = [
	[' ',' ',' '],
	[' ',' ',' '],
	[' ',' ',' ']
];
printboard(board);
board[0][1] = '1';
board[2][2] = 'B';
printboard(board);
*/

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
	var board = [];
	for (rows = numberOfRows; rows > 0; rows--) {
		row = [];
		for (columns = numberOfColumns; columns > 0; columns--) {
			row.push(' ');
		}
		board.push(row);
	}
	return board;
};
var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
	var board = [];
	for (rows = numberOfRows; rows > 0; rows--) {
		row = [];
		for (columns = numberOfColumns; columns > 0; columns--) {
			row.push(null);
		}
		board.push(row);
	}
	var numberOfBombsPlaced = 0;
	while (numberOfBombsPlaced < numberOfBombs) {
		var randomRowIndex = Math.floor(Math.random() * numberOfRows);
		var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		if (board[randomRowIndex][randomColumnIndex] === null) {
			board[randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++;
		}

		//numberOfBombsPlaced++
	}
	return board;
};

var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {
	var neighborOffsets = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
	var numberOfRows = bombBoard.length;
	var numberOfColumns = bombBoard[0].length;
	var numberOfBombs = 0;
	neighborOffsets.forEach(function (offset) {
		var neighborRowIndex = rowIndex + offset[0];
		var neighborColumnIndex = columnIndex + offset[1];
		if (neighborRowIndex >= 0 && neighborRowIndex <= numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex <= numberOfColumns) {
			if (bombBoard[neighborRowIndex][neighborColumnIndex] != null) {
				numberOfBombs++;
			}
		}
	});
	return numberOfBombs;
};

var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {
	if (playerBoard[rowIndex][columnIndex] != ' ') {
		console.log('this tile has already been flipped');
		return;
	} else if (bombBoard[rowIndex][columnIndex] === 'B') {
		playerBoard[rowIndex][columnIndex] = 'B';
	} else {
		playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
	}
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('PLAYER BOARD');
printboard(playerBoard);
console.log('\n\n\nBOMB BOARD');
printboard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log("UPDATED PLAYER BOARD\n");
printboard(playerBoard);