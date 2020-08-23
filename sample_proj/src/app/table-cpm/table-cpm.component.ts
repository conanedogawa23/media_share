import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableCpmDataSource } from './table-cpm-datasource';

@Component({
  selector: 'app-table-cpm',
  templateUrl: './table-cpm.component.html',
  styleUrls: ['./table-cpm.component.css']
})
export class TableCpmComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableCpmDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TableCpmDataSource(this.paginator, this.sort);
  }
}
