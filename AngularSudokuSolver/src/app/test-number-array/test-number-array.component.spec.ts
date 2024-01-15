import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNumberArrayComponent } from './test-number-array.component';

describe('TestNumberArrayComponent', () => {
  let component: TestNumberArrayComponent;
  let fixture: ComponentFixture<TestNumberArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestNumberArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestNumberArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
