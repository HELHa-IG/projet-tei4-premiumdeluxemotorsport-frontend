import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomDashboardComponent } from './add-custom-dashboard.component';

describe('AddCustomDashboardComponent', () => {
  let component: AddCustomDashboardComponent;
  let fixture: ComponentFixture<AddCustomDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCustomDashboardComponent]
    });
    fixture = TestBed.createComponent(AddCustomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
