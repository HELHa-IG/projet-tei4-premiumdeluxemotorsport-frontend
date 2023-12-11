import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReservationDashboardComponent } from './add-reservation-dashboard.component';

describe('AddReservationDashboardComponent', () => {
  let component: AddReservationDashboardComponent;
  let fixture: ComponentFixture<AddReservationDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReservationDashboardComponent]
    });
    fixture = TestBed.createComponent(AddReservationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
