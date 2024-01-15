import { Component } from '@angular/core';

@Component({
  selector: 'app-sudoku-board',
  standalone: true,
  imports: [],
  templateUrl: './sudoku-board.component.html',
  styleUrl: './sudoku-board.component.css'
})
export class SudokuBoardComponent {
  handleSolveClick() {
    this.SolveBoard();
  }

  zeroCoordinates = [10, 10];
  possibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  gridNumsRemaining=[    
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  ];
  
  // Easy Sudoku  -  websudoku.com/?level=1&set_id=6281188941
  //https://www.websudoku.com/?level=1&set_id=5395153520
  boardRows = [
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [5],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1],
      [8],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [8],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [7],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [5]
    ],
    [
      [5],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [8],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [6],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [4]
    ],
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [3],
      [6],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [5],
      [7],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [4],
      [9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [5],
      [3],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [5],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [4],
      [8],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [9],
      [7],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
    [
      [3],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [8],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [9]
    ],
    [
      [6],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [8],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [3],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [5],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ],
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [4],
      [7],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [5],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
  ];
  
  Display(num: number): string {
    if (num === 0){
      return " ";
    }
    return `${num}`;
  }

  PrintBoard(): void {
    console.log(" ----- ----- ----- ----- ----- ----- ----- ----- ----- ");
    for (let row = 0; row < 9; row++) {
      let rowString = "|";
      for (let col = 0; col < 9; col++) {
        rowString = rowString.concat(`  ${this.Display(this.boardRows[row][col][0])}  |`);
      }
      console.log(rowString);
      console.log(" ----- ----- ----- ----- ----- ----- ----- ----- ----- ");
    }
  }

  PrintBoardRows(): void {
    console.log(" ----- ----- ----- Printing Board Rows ----- ----- ----- ");
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        console.log(`Row ${row}, Col ${col}: ${this.boardRows[row][col]}  |`);
      }
      console.log(" ----- ----- ----- ----- ----- ----- ----- ----- ----- ");
    }
  }

  IsBoardSolved(): boolean {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        console.log(`CHECKING SOLVED - Row: ${row}, Col: ${col} boardRows[row][col].length = ${this.boardRows[row][col].length}`);
        if (this.boardRows[row][col].length != 1) {
  
          console.log('----------------------------------------');
          console.log("Board is not solved");
          console.log('----------------------------------------');
  
          return false;
        }
      }
    }
    return true;
  }

  SolveBoard(): void {

    // SINGLE RUN FOR TESTING
    this.PrintBoard();
    this.EliminatePossibilites();
    this.IsolateUniqueInGrid();
    this.PrintBoardRows();


    // FULL RUN UNTIL SOLVED
    // while (this.IsBoardSolved() === false) {
    //   this.EliminatePossibilites();
    //   this.IsolateUniqueInGrid();
    // }
    // console.log('----------------------------------------');
    // console.log("SOLVED!!!");
    // console.log('----------------------------------------');
  
    //this.PrintBoard();
  }
  EliminatePossibilites(): void {
    for (let row = 0; row < 9; row++) {
      let gridIndex = 3*(Math.floor(row/3));
      let possibleGrid = [gridIndex, gridIndex+1, gridIndex+2];
      
      for (let col = 0; col < 9; col++) {
        let gridNum = possibleGrid[Math.floor(col/3)]
  
        if (this.boardRows[row][col].length === 2 && this.boardRows[row][col][0] === 0) {
          this.boardRows[row][col].splice(this.boardRows[row][col].indexOf(0), 1);
        }
        if (this.boardRows[row][col].length === 1) {
          console.log()
          this.RemoveNumberFromRow(row, col, this.boardRows[row][col][0]);
          this.RemoveNumberFromColumn(row, col, this.boardRows[row][col][0]);
          this.RemoveNumberFromGrid(gridNum, this.boardRows[row][col][0]);
        }
      }
    }
  }
  IsolateUniqueInGrid(): void {
    let uniqueCoordinates = this.zeroCoordinates;
    for (let gridNum = 0; gridNum < 9; gridNum++) {
      for (let num = 1; num <= 9; num++) {
        console.log(`START IsolateUniqueInGrid() Grid: ${gridNum} | ${this.gridNumsRemaining[gridNum]}`);
        if(this.gridNumsRemaining[gridNum].includes(num))
        {
          console.log(`uniqueCoordinates before CheckUniqueInGrid(): ${uniqueCoordinates}`);
          console.log(`uniqueCoordinates from CheckUniqueInGrid() by function: ${this.CheckUniqueInGrid(num, gridNum)}`);
          uniqueCoordinates = this.CheckUniqueInGrid(num, gridNum);
          console.log(`uniqueCoordinates from CheckUniqueInGrid() by return: ${uniqueCoordinates}`);
          
          if ((uniqueCoordinates[0] !== 10) || (uniqueCoordinates[1] !== 10)) {

            this.boardRows[uniqueCoordinates[0]][uniqueCoordinates[1]] = [num];
            console.log(
              `IsolateUniqueInGrid() Row: ${uniqueCoordinates[0]}, Column: ${uniqueCoordinates[1]} isolated to ${num}`
            );
            this.gridNumsRemaining[gridNum].splice(this.gridNumsRemaining[gridNum].indexOf(num),1);
            console.log(`Grid: ${gridNum} | ${this.gridNumsRemaining[gridNum]}`);
          }
        }
      }
    }
  }
  CheckUniqueInGrid(num: number, gridNum: number): number[] {
    let uniqueCoordinates2 = this.zeroCoordinates;
    let rowIndex = 3 * Math.floor(gridNum / 3);
    let colIndex = 3 * (gridNum % 3);
  
    try {
      for (let row = rowIndex; row < rowIndex + 3; row++) {
        for (let col = colIndex; col < colIndex + 3; col++) {
          console.log(
            `Checking Grid: ${gridNum}, Row: ${row}, Column: ${col}, Number ${num}`
          );
          if (this.boardRows[row][col].includes(num)) {
            if (this.boardRows[row][col][0] === num){
              uniqueCoordinates2 = [row, col];
              return uniqueCoordinates2;
            }
            if (uniqueCoordinates2 === this.zeroCoordinates) {
              uniqueCoordinates2 = [row, col];
            } else {
              console.log(
                `CheckUniqueInGrid is returning zeroCoordinates: ${this.zeroCoordinates}`
              );
              return this.zeroCoordinates;
            }
          }
        }
      }
      console.log(
        `CheckUniqueInGrid is returning uniqueCoordinates: ${uniqueCoordinates2}`
      );
      return uniqueCoordinates2;
    } catch (err: any) {
      console.log(`Error thrown in CheckUniqueInGrid: ${err.message}`);
    }
    finally {
      return this.zeroCoordinates;
    }
  }
  
  RemoveNumber(row: number, col: number, num: number): void{
    if (this.boardRows[row][col].includes(num) && this.boardRows[row][col].length > 1)
    {
      this.boardRows[row][col].splice(this.boardRows[row][col].indexOf(num), 1);
    }
    if (this.boardRows[row][col].length === 2 && this.boardRows[row][col][0] === 0)
    {
      // console.log(
      //   `RemoveNumber() Row: ${row}, Column: ${col} is currently ${this.boardRows[row][col]}`
      // );
      this.boardRows[row][col].splice(this.boardRows[row][col].indexOf(0), 1);
      console.log(
        `RemoveNumber() Row: ${row}, Column: ${col} isolated to ${this.boardRows[row][col][0]}`
      );
    }
  }
  RemoveNumberFromRow(row: number, col: number, num: number) :void {
    for (let colCheck = 0; colCheck < 9; colCheck++)
    {
      if (col != colCheck && this.boardRows[row][colCheck].includes(num))
      {
        this.RemoveNumber(row, colCheck, num);
      }
    }
  }
  RemoveNumberFromColumn(row: number, col: number, num: number): void {
    for (let rowCheck = 0; rowCheck < 9; rowCheck++)
    {
      if (row != rowCheck && this.boardRows[rowCheck][col].includes(num))
      {
        this.RemoveNumber(rowCheck, col, num);
      }
    }
  }
  RemoveNumberFromGrid(gridNum: number, num: number): void {
    if (this.gridNumsRemaining[gridNum].includes(num))
    {
      let rowIndex = 3 * Math.floor(gridNum / 3);
      let colIndex = 3 * (gridNum % 3);
  
      for (let row = rowIndex; row < rowIndex + 3; row++) {
        for (let col = colIndex; col < colIndex + 3; col++) {
          if (this.boardRows[row][col].includes(num) && this.boardRows[row][col].length > 1){
            this.RemoveNumber(row, col, num);
            // console.log(
            //   `RemoveNumberFromGrid Removed ${num} from Grid ${gridNum} | Row: ${row}, Column: ${col}`
            // );
          }
        }
      }
      this.gridNumsRemaining[gridNum].splice(this.gridNumsRemaining[gridNum].indexOf(num),1);
    }
    // console.log(
    //   `Grid ${gridNum} | Numbers left to eliminate: ${this.gridNumsRemaining[gridNum]}`
    // );
  }
}
