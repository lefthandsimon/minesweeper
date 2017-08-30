const printboard = (board) => {
	console.log(board.map(row => row.join('| ')).join('\n'));	
}
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


const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];
	for (rows = numberOfRows; rows >0; rows--){
		row = [];
		for(columns = numberOfColumns; columns > 0; columns--){
			row.push(' ');
		}
		board.push(row);
	}
	return board;
}
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	for (rows = numberOfRows; rows >0; rows--){
		row = [];
		for(columns = numberOfColumns; columns > 0; columns--){
			row.push(null);
		}
	board.push(row);
	}
	
	let numberOfBombsPlaced = 0;
	while(numberOfBombsPlaced <= numberOfBombs)
	{
		// fix potential duplication of location
		let randomRowIndex = Math.floor(Math.random() * numberOfRows);
		let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced++
	}





	return board;
}


let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('PLAYER BOARD');
printboard(playerBoard);
console.log('\n\n\nBOMB BOARD');
printboard(bombBoard);