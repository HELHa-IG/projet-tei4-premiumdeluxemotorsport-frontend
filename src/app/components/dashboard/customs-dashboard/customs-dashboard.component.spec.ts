import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsDashboardComponent } from './customs-dashboard.component';

describe('CustomsDashboardComponent', () => {
  let component: CustomsDashboardComponent;
  let fixture: ComponentFixture<CustomsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomsDashboardComponent]
    });
    fixture = TestBed.createComponent(CustomsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
