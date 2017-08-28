'use strict';

var printboard = function printboard(board) {
	console.log(board[0].join('|'));
	console.log(board[1].join('|'));
	console.log(board[2].join('|'));
};
var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
console.log(printboard(board));