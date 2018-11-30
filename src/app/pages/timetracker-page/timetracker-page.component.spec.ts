import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetrackerPageComponent } from './timetracker-page.component';

describe('TimetrackerPageComponent', () => {
  let component: TimetrackerPageComponent;
  let fixture: ComponentFixture<TimetrackerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetrackerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetrackerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
