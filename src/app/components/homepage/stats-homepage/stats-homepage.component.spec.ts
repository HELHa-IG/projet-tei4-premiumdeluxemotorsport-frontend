import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsHomepageComponent } from './stats-homepage.component';

describe('StatsHomepageComponent', () => {
  let component: StatsHomepageComponent;
  let fixture: ComponentFixture<StatsHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsHomepageComponent]
    });
    fixture = TestBed.createComponent(StatsHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
