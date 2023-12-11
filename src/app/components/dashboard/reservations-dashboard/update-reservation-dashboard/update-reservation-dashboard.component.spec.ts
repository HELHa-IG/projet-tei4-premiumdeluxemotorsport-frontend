import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReservationDashboardComponent } from './update-reservation-dashboard.component';

describe('UpdateReservationDashboardComponent', () => {
  let component: UpdateReservationDashboardComponent;
  let fixture: ComponentFixture<UpdateReservationDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateReservationDashboardComponent]
    });
    fixture = TestBed.createComponent(UpdateReservationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
