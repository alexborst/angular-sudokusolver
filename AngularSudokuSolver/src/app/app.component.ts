import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SudokuBoardComponent } from './sudoku-board/sudoku-board.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, SudokuBoardComponent]
})
export class AppComponent {
  title = 'AngularSudokuSolver';
}
