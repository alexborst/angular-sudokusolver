let zeroCoordinates = [10, 10];
let validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let possibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let possibleRow = [
  possibleNumbers,
  possibleNumbers,
  possibleNumbers,
  possibleNumbers,
  possibleNumbers,
  possibleNumbers,
  possibleNumbers,
  possibleNumbers,
  possibleNumbers,
];

// let boardRows = [
//   [
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//   ],
//   [
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//   ],
//   [
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//   ],
//   [
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//   ],
//   [
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//   ],
//   [
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//   ],
//   [
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//   ],
//   [
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//   ],
//   [
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//     possibleNumbers,
//   ],
// ];

let boardRows = [
  // Easy Sudoku  -  websudoku.com/?level=1&set_id=6281188941
  [
    possibleNumbers,
    possibleNumbers,
    possibleNumbers,
    possibleNumbers,
    [9],
    [7],
    [1],
    possibleNumbers,
    [2],
  ],
  [
    possibleNumbers,
    possibleNumbers,
    [1],
    possibleNumbers,
    [2],
    possibleNumbers,
    [4],
    [8],
    [9],
  ],
  [
    [4],
    possibleNumbers,
    possibleNumbers,
    [3],
    [8],
    possibleNumbers,
    [7],
    possibleNumbers,
    possibleNumbers,
  ],
  [
    [6],
    possibleNumbers,
    [9],
    possibleNumbers,
    possibleNumbers,
    [3],
    possibleNumbers,
    [5],
    possibleNumbers,
  ],
  [
    possibleNumbers,
    possibleNumbers,
    possibleNumbers,
    possibleNumbers,
    possibleNumbers,
    possibleNumbers,
    possibleNumbers,
    possibleNumbers,
    possibleNumbers,
  ],
  [
    possibleNumbers,
    [8],
    possibleNumbers,
    [1],
    possibleNumbers,
    possibleNumbers,
    [6],
    possibleNumbers,
    [7],
  ],
  [
    possibleNumbers,
    possibleNumbers,
    [8],
    possibleNumbers,
    [7],
    [6],
    possibleNumbers,
    possibleNumbers,
    [3],
  ],
  [
    [5],
    [7],
    [6],
    possibleNumbers,
    [3],
    possibleNumbers,
    [8],
    possibleNumbers,
    possibleNumbers,
  ],
  [
    [9],
    possibleNumbers,
    [3],
    [2],
    [1],
    possibleNumbers,
    possibleNumbers,
    possibleNumbers,
    possibleNumbers,
  ],
];

let boardRowzz = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function PrintBoard() {
  console.log(" ----- ----- ----- ----- ----- ----- ----- ----- ----- ");
  for (let row = 0; row < 9; row++) {
    let rowString = "|";
    for (let col = 0; col < 9; col++) {
      rowString = rowString.concat(`  ${boardRows[row][col]}  |`);
    }
    console.log(rowString);
    console.log(" ----- ----- ----- ----- ----- ----- ----- ----- ----- ");
  }
}
function IsBoardSolved() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (boardRows[(row, col)].length != 1) {
        console.log("Board is not solved");
        return false;
      }
    }
  }
  return true;
}
function SolveBoard() {
  while (!IsBoardSolved()) {
    EliminateRowAndColumnPossibilites();
    IsolateUniqueInGrid();
  }
  console.log("SOLVED!!!");
  PrintBoard();
}

function EliminateRowAndColumnPossibilites() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      console.log(
        `Array Length at Row: ${row}, Column: ${col} - ${boardRows[row][col].length}`
      );
      if (boardRows[row][col].length > 1) {
        for (
          let numIndex = 1;
          numIndex < boardRows[row][col].length;
          numIndex++
        ) {
          let numToCheck = boardRows[row][col][numIndex];
          console.log(
            `CheckingforConflicts Row: ${row}, Column: ${col}, Number: ${numToCheck}`
          );
          if (
            NumberConflictsInRow(numToCheck, row, col) ||
            NumberConflictsInCol(numToCheck, row, col)
          ) {
            RemovePossibleNumberAtIndex(row, col, numIndex);
          }
        }
      }
    }
  }
}

function IsolateUniqueInGrid() {
  let uniqueCoordinates = zeroCoordinates;
  for (let gridNum = 0; gridNum < 9; gridNum++) {
    for (let num = 1; num <= 9; num++) {
      uniqueCoordinates = CheckUniqueInGrid(num, gridNum);
      if (!(uniqueCoordinates[0] == 10 || uniqueCoordinates[1] == 10)) {
        console.log(
          `Row: ${uniqueCoordinates[0]}, Column: ${uniqueCoordinates[1]} isolated to ${num}`
        );
        boardRows[uniqueCoordinates[0]][uniqueCoordinates[1]] = [num];
      }
    }
  }
}

function NumberConflictsInRow(num, row, col) {
  for (let colToCheck = 0; colToCheck < 9; colToCheck++) {
    if (colToCheck != col) {
      if (num == boardRows[row][colToCheck][0]) {
        console.log(
          `NumberConflictsInRow -  Number: ${num} Row: ${row} | Column1: ${col} WITH Column2: ${colToCheck} `
        );
        return true;
      }
    }
  }
  return false;
}
function NumberConflictsInCol(num, row, col) {
  for (let rowToCheck = 0; rowToCheck < 9; rowToCheck++) {
    if (rowToCheck != row) {
      if (num == boardRows[rowToCheck][col][0]) {
        console.log(
          `NumberConflictsInCol -  Number: ${num} Column: ${col} | Row1: ${row} WITH Row2: ${rowToCheck} `
        );
        return true;
      }
    }
  }
  return false;
}

function CheckUniqueInGrid(num, gridNum) {
  let uniqueCoordinates = zeroCoordinates;
  let rowIndex = 3 * Math.floor(gridNum / 3);
  let colIndex = 3 * (gridNum % 3);

  try {
    for (let row = rowIndex; row < rowIndex + 3; row++) {
      // iterate through rows
      for (let col = colIndex; col < colIndex + 3; col++) {
        console.log(
          `Checking Grid: ${gridNum}, Row: ${row}, Column: ${col}, Number ${num}`
        );
        if (boardRows[row][col].includes(num)) {
          if (uniqueCoordinates == zeroCoordinates) {
            uniqueCoordinates = [row, col];
          } else {
            console.log(
              `CheckUniqueInGrid is returning zeroCoordinates: ${zeroCoordinates}`
            );
            return zeroCoordinates;
          }
        }
      }
    }
    console.log(
      `CheckUniqueInGrid is returning uniqueCoordinates: ${uniqueCoordinates}`
    );
    return uniqueCoordinates;
  } catch (err) {
    console.log(`Error thrown in CheckUniqueInGrid: ${err.message}`);
  }
}

function RemovePossibleNumberAtIndex(row, col, numIndex) {
  let zeroIndex = boardRows[row][col].indexOf(0);
  console.log(`Removing ${numIndex} from row: ${row}, column: ${col}`);
  boardRows[row][col].splice(numIndex, 1);
  if (boardRows[row][col].length == 2) {
    boardRows[row][col].splice(zeroIndex, 1);
    console.log(
      `Row: ${row}, Column: ${col} isolated to ${boardRows[row][col][0]}`
    );
  }
}
function RemovePossibleNumber(row, col, num) {
  let numIndex = boardRows[row][col].indexOf(num);
  let zeroIndex = boardRows[row][col].indexOf(0);
  console.log(`Removing ${num} from row: ${row}, column: ${col}`);
  boardRows[row][col].splice(numIndex, 1);
  if (boardRows[row][col].length == 2) {
    boardRows[row][col].splice(zeroIndex, 1);
    console.log(
      `Row: ${row}, Column: ${col} isolated to ${boardRows[row][col][0]}`
    );
  }
}

//PrintBoard();
//console.log(boardRows[0][0].length);

SolveBoard();
