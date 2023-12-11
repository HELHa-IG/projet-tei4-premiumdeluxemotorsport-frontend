import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommandDashboardComponent } from './update-command-dashboard.component';

describe('UpdateCommandDashboardComponent', () => {
  let component: UpdateCommandDashboardComponent;
  let fixture: ComponentFixture<UpdateCommandDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCommandDashboardComponent]
    });
    fixture = TestBed.createComponent(UpdateCommandDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
