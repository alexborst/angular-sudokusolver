import { Component } from '@angular/core';

@Component({
  selector: 'app-solved-board',
  standalone: true,
  imports: [],
  templateUrl: './solved-board.component.html',
  styleUrl: './solved-board.component.css'
})
export class SolvedBoardComponent {

  //https://www.websudoku.com/?level=1&set_id=5395153520
  boardRows = [
    [
      [9],
      [6],
      [3],
      [5],
      [4],
      [1],
      [8],
      [2],
      [7]
    ],
    [
      [4],
      [8],
      [2],
      [3],
      [7],
      [9],
      [1],
      [6],
      [5]
    ],
    [
      [5],
      [1],
      [7],
      [8],
      [2],
      [6],
      [3],
      [9],
      [4]
    ],
    [
      [8],
      [3],
      [6],
      [9],
      [5],
      [7],
      [4],
      [1],
      [2]
    ],
    [
      [7],
      [4],
      [9],
      [6],
      [1],
      [2],
      [5],
      [3],
      [8]
    ],
    [
      [2],
      [5],
      [1],
      [4],
      [8],
      [3],
      [9],
      [7],
      [6]
    ],
    [
      [3],
      [7],
      [5],
      [1],
      [6],
      [8],
      [2],
      [4],
      [9]
    ],
    [
      [6],
      [9],
      [8],
      [2],
      [3],
      [4],
      [7],
      [5],
      [1],
    ],
    [
      [1],
      [2],
      [4],
      [7],
      [9],
      [5],
      [6],
      [8],
      [3]
    ],
  ];

  Display(num: number): string {
    if (num == 0){
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
}
