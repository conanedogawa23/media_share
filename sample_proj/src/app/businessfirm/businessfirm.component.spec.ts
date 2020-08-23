import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessfirmComponent } from './businessfirm.component';

describe('BusinessfirmComponent', () => {
  let component: BusinessfirmComponent;
  let fixture: ComponentFixture<BusinessfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
