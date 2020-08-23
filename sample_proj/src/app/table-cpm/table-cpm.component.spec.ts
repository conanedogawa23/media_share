
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCpmComponent } from './table-cpm.component';

describe('TableCpmComponent', () => {
  let component: TableCpmComponent;
  let fixture: ComponentFixture<TableCpmComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCpmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
