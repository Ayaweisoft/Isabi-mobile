import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcctPagePage } from './acct-page.page';

describe('AcctPagePage', () => {
  let component: AcctPagePage;
  let fixture: ComponentFixture<AcctPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcctPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcctPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
