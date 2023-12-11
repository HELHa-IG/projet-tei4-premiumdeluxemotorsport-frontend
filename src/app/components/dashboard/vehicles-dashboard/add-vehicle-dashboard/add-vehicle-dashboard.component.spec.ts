import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleDashboardComponent } from './add-vehicle-dashboard.component';

describe('AddVehicleDashboardComponent', () => {
  let component: AddVehicleDashboardComponent;
  let fixture: ComponentFixture<AddVehicleDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVehicleDashboardComponent]
    });
    fixture = TestBed.createComponent(AddVehicleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
