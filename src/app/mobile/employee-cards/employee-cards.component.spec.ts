import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardsComponent } from './employee-cards.component';

describe('EmployeeCardsComponent', () => {
  let component: EmployeeCardsComponent;
  let fixture: ComponentFixture<EmployeeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
