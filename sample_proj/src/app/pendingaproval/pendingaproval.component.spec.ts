import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingaprovalComponent } from './pendingaproval.component';

describe('PendingaprovalComponent', () => {
  let component: PendingaprovalComponent;
  let fixture: ComponentFixture<PendingaprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingaprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingaprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
