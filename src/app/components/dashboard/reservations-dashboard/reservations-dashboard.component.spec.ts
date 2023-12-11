import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsDashboardComponent } from './reservations-dashboard.component';

describe('ReservationsDashboardComponent', () => {
  let component: ReservationsDashboardComponent;
  let fixture: ComponentFixture<ReservationsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationsDashboardComponent]
    });
    fixture = TestBed.createComponent(ReservationsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
