import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmangementComponent } from './admangement.component';

describe('AdmangementComponent', () => {
  let component: AdmangementComponent;
  let fixture: ComponentFixture<AdmangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
