import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAgencyIndexComponent } from './ad-agency-index.component';

describe('AdAgencyIndexComponent', () => {
  let component: AdAgencyIndexComponent;
  let fixture: ComponentFixture<AdAgencyIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdAgencyIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAgencyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
