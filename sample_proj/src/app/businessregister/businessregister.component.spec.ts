import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessregisterComponent } from './businessregister.component';

describe('BusinessregisterComponent', () => {
  let component: BusinessregisterComponent;
  let fixture: ComponentFixture<BusinessregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
