class Game{
	constructor(numberOfRows, numberOfColumns, numberOfBombs){
		this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs)

		}

		get board()
		{
			return this._board;
		}

		playMove(rowIndex, columnIndex){
			this._board.flipTile(rowIndex, columnIndex);
			if(this._board.bombBoard[rowIndex][columnIndex] === 'B'){
				console.log('GAME OVER');
				this._board.print(this._board.playerBoard);
			}else if(!this._board.hasSafeTiles()){
				console.log("YOU WIN!");
			}else{
				console.log("current board");
				this._board.print(this._board.playerBoard);
			}
		}
	}



class Board {
	constructor(numberOfRows, numberOfColumns, numberOfBombs) {
		this._numberOfBombs = numberOfBombs;
		this._numberOfTiles = numberOfRows*numberOfColumns;
		this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
		this._bombBoard = Board.generateBombBoard(numberOfRows,numberOfColumns,numberOfBombs);
	}
	get playerBoard(){
		return this._playerBoard;
	}

	get bombBoard(){
		return this._playerBoard;
	}

	flipTile(rowIndex, columnIndex){
		if(this._playerBoard[rowIndex][columnIndex] != ' '){
			console.log('this tile has already been flipped');
			return;
		}else if(this._bombBoard[rowIndex][columnIndex] === 'B'){
			this._playerBoard[rowIndex][columnIndex] ='B';
		}else{
			this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
		}
		this._numberOfTiles--;
	}
	getNumberOfNeighborBombs(rowIndex, columnIndex){
		const neighborOffsets = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
		const numberOfRows = this._bombBoard.length;
		const numberOfColumns = this._bombBoard[0].length;
		let numberOfBombs =0;
		neighborOffsets.forEach(offset =>{
			const neighborRowIndex = rowIndex + offset[0];
			const neighborColumnIndex = columnIndex + offset[1];
			if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >=0 && neighborColumnIndex < numberOfColumns){
				if(this._bombBoard[neighborRowIndex][neighborColumnIndex] != null){
				numberOfBombs++
				}
			}
		});
		return numberOfBombs;
	}

	hasSafeTiles(){
		return this._numberOfTiles != this._numberOfBombs;
	}

	print(board)	{
		console.log(board.map(row => row.join('| ')).join('\n'));
	}
	static generatePlayerBoard(numberOfRows, numberOfColumns){
		let board = [];
		for (let rows = numberOfRows; rows >0; rows--){
			let row = [];
			for(let columns = numberOfColumns; columns > 0; columns--){
				row.push(' ');
			}
			board.push(row);
		}
		return board;
	}
	static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
		let board = [];
		for (let rows = numberOfRows; rows >0; rows--){
			let row = [];
			for(let columns = numberOfColumns; columns > 0; columns--){
				row.push(null);
			}
		board.push(row);
		}
		let numberOfBombsPlaced = 0;
		while(numberOfBombsPlaced < numberOfBombs)
		{
			let randomRowIndex = Math.floor(Math.random() * numberOfRows);
			let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
			if(board[randomRowIndex][randomColumnIndex] === null){
				board[randomRowIndex][randomColumnIndex] = 'B';
				numberOfBombsPlaced++
			}


			//numberOfBombsPlaced++
		}
		return board;
	}
}


const g = new Game(3,3,3);

g.playMove(0,0);
g.playMove(1,1);
g.playMove(2,2);
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
