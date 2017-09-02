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

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) =>{
	const neighborOffsets = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
	const numberOfRows = bombBoard.length;
	const numberOfColumns = bombBoard[0].length;
	let numberOfBombs =0;
	neighborOffsets.forEach(offset =>{
		const neighborRowIndex = rowIndex + offset[0];
		const neighborColumnIndex = columnIndex + offset[1];
		if(neighborRowIndex >= 0 && neighborRowIndex <= numberOfRows && neighborColumnIndex >=0 && neighborColumnIndex <= numberOfColumns){
			if(bombBoard[neighborRowIndex][neighborColumnIndex] != null){
			numberOfBombs++
			}
		}
	});
	return numberOfBombs;
}

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
	if(playerBoard[rowIndex][columnIndex] != ' '){
		console.log('this tile has already been flipped');
		return;
	}else if(bombBoard[rowIndex][columnIndex] === 'B'){
		playerBoard[rowIndex][columnIndex] ='B';
	}else{
		playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
	}
}




let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('PLAYER BOARD');
printboard(playerBoard);
console.log('\n\n\nBOMB BOARD');
printboard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log("UPDATED PLAYER BOARD\n");
printboard(playerBoard);
