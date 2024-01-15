import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SudokuBoardComponent } from './sudoku-board/sudoku-board.component';
import { OriginalBoardComponent } from "./original-board/original-board.component";
import { SolvedBoardComponent } from "./solved-board/solved-board.component";
import { TestNumberArrayComponent } from './test-number-array/test-number-array.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, SudokuBoardComponent, OriginalBoardComponent, SolvedBoardComponent, TestNumberArrayComponent]
})
export class AppComponent {
  title = 'AngularSudokuSolver';
}
