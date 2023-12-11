import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoleDashboardComponent } from './update-role-dashboard.component';

describe('UpdateRoleDashboardComponent', () => {
  let component: UpdateRoleDashboardComponent;
  let fixture: ComponentFixture<UpdateRoleDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRoleDashboardComponent]
    });
    fixture = TestBed.createComponent(UpdateRoleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
