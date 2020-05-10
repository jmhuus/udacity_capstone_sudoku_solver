import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOfTheDayComponent } from './board-of-the-day.component';

describe('BoardOfTheDayComponent', () => {
  let component: BoardOfTheDayComponent;
  let fixture: ComponentFixture<BoardOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
