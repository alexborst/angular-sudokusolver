import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalBoardComponent } from './original-board.component';

describe('OriginalBoardComponent', () => {
  let component: OriginalBoardComponent;
  let fixture: ComponentFixture<OriginalBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriginalBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OriginalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
