import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogocloudsComponent } from './logoclouds.component';

describe('LogocloudsComponent', () => {
  let component: LogocloudsComponent;
  let fixture: ComponentFixture<LogocloudsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogocloudsComponent]
    });
    fixture = TestBed.createComponent(LogocloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
