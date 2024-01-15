import { Component } from '@angular/core';

@Component({
  selector: 'app-test-number-array',
  standalone: true,
  imports: [],
  templateUrl: './test-number-array.component.html',
  styleUrl: './test-number-array.component.css'
})
export class TestNumberArrayComponent {

  counter = 0;
  testArray = [0,0];

  TestArrayFunction(): number[] {
    this.counter++;
    return [this.counter, this.counter];
  }

  handleClick() {
    console.log(`testArray = ${this.testArray}`);
    this.testArray = this.TestArrayFunction();
    console.log(`testArray = ${this.testArray}`);
  }
}
