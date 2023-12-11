import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserDashboardComponent } from './update-user-dashboard.component';

describe('UpdateUserDashboardComponent', () => {
  let component: UpdateUserDashboardComponent;
  let fixture: ComponentFixture<UpdateUserDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserDashboardComponent]
    });
    fixture = TestBed.createComponent(UpdateUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
