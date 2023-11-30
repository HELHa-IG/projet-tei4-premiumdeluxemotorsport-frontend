import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageNotFoundComponent } from './error-page-not-found.component';

describe('ErrorPageNotFoundComponent', () => {
  let component: ErrorPageNotFoundComponent;
  let fixture: ComponentFixture<ErrorPageNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorPageNotFoundComponent]
    });
    fixture = TestBed.createComponent(ErrorPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
