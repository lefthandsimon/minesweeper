'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
	function Game(numberOfRows, numberOfColumns, numberOfBombs) {
		_classCallCheck(this, Game);

		this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
	}

	_createClass(Game, [{
		key: 'playMove',
		value: function playMove(rowIndex, columnIndex) {
			this._board.flipTile(rowIndex, columnIndex);
			if (this._board.bombBoard[rowIndex][columnIndex] === 'B') {
				console.log('GAME OVER');
				this._board.print(this._board.playerBoard);
			} else if (!this._board.hasSafeTiles()) {
				console.log("YOU WIN!");
			} else {
				console.log("current board");
				this._board.print(this._board.playerBoard);
			}
		}
	}, {
		key: 'board',
		get: function get() {
			return this._board;
		}
	}]);

	return Game;
}();

var g = new Game(3, 3, 3);

g.playMove(0, 0);
g.playMove(1, 1);
g.playMove(2, 2);
//console.log(g.board.print(g.board.bombBoard));
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