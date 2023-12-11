import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommandDashboardComponent } from './add-command-dashboard.component';

describe('AddCommandDashboardComponent', () => {
  let component: AddCommandDashboardComponent;
  let fixture: ComponentFixture<AddCommandDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCommandDashboardComponent]
    });
    fixture = TestBed.createComponent(AddCommandDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
