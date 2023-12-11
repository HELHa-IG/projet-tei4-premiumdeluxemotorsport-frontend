import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsDashboardComponent } from './commands-dashboard.component';

describe('CommandsDashboardComponent', () => {
  let component: CommandsDashboardComponent;
  let fixture: ComponentFixture<CommandsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandsDashboardComponent]
    });
    fixture = TestBed.createComponent(CommandsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
