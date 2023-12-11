import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomDashboardComponent } from './update-custom-dashboard.component';

describe('UpdateCustomDashboardComponent', () => {
  let component: UpdateCustomDashboardComponent;
  let fixture: ComponentFixture<UpdateCustomDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCustomDashboardComponent]
    });
    fixture = TestBed.createComponent(UpdateCustomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
