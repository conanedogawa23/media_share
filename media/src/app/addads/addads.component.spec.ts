import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadsComponent } from './addads.component';

describe('AddadsComponent', () => {
  let component: AddadsComponent;
  let fixture: ComponentFixture<AddadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
