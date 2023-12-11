import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleDashboardComponent } from './add-role-dashboard.component';

describe('AddRoleDashboardComponent', () => {
  let component: AddRoleDashboardComponent;
  let fixture: ComponentFixture<AddRoleDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRoleDashboardComponent]
    });
    fixture = TestBed.createComponent(AddRoleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
