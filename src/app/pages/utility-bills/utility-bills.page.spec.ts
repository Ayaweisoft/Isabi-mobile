import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityBillsPage } from './utility-bills.page';

describe('UtilityBillsPage', () => {
  let component: UtilityBillsPage;
  let fixture: ComponentFixture<UtilityBillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilityBillsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
