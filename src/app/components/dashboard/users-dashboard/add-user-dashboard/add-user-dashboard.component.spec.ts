import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserDashboardComponent } from './add-user-dashboard.component';

describe('AddUserDashboardComponent', () => {
  let component: AddUserDashboardComponent;
  let fixture: ComponentFixture<AddUserDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserDashboardComponent]
    });
    fixture = TestBed.createComponent(AddUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
