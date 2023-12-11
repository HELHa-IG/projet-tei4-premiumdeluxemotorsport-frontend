import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleDashboardComponent } from './update-vehicle-dashboard.component';

describe('UpdateVehicleDashboardComponent', () => {
  let component: UpdateVehicleDashboardComponent;
  let fixture: ComponentFixture<UpdateVehicleDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVehicleDashboardComponent]
    });
    fixture = TestBed.createComponent(UpdateVehicleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
