import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesDashboardComponent } from './vehicles-dashboard.component';

describe('VehiclesDashboardComponent', () => {
  let component: VehiclesDashboardComponent;
  let fixture: ComponentFixture<VehiclesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesDashboardComponent]
    });
    fixture = TestBed.createComponent(VehiclesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
