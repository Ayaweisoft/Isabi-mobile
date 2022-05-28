import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountNewPage } from './account-new.page';

describe('AccountNewPage', () => {
  let component: AccountNewPage;
  let fixture: ComponentFixture<AccountNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
