import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvedBoardComponent } from './solved-board.component';

describe('SolvedBoardComponent', () => {
  let component: SolvedBoardComponent;
  let fixture: ComponentFixture<SolvedBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolvedBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolvedBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
