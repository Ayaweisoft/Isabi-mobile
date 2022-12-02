import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardEventPage } from './onboard-event.page';

describe('OnboardEventPage', () => {
  let component: OnboardEventPage;
  let fixture: ComponentFixture<OnboardEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
