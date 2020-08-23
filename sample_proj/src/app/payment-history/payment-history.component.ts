import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material';
// import { MatPaginator, MatSort } from '@angular/material';
// import { PaymentHistoryDataSource } from './payment-history-datasource';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'sai', weight: 100, symbol: 'LbNagar'},
  {position: 2, name: 'kumar', weight: 406, symbol: 'LbNagar'},
  {position: 4, name: 'ram', weight: 6941, symbol: 'LbNagar'},
  {position: 5, name: 'dddd', weight: 6941, symbol: 'LbNagar'},
  {position: 6, name: 'ffff', weight: 6941, symbol: 'LbNagar'},
  {position: 7, name: 'ssss', weight: 641, symbol: 'LbNagar'},
  {position: 8, name: 'aaaa', weight: 6941, symbol: 'LbNagar'},
  {position: 9, name: 'eeee', weight: 6941, symbol: 'LbNagar'},
  {position: 10, name: 'eeee', weight: 6941, symbol: 'LbNagar'},
  {position: 11, name: 'eeee', weight: 6941, symbol: 'LbNagar'},
  {position: 12, name: 'eeee', weight: 6941, symbol: 'LbNagar'},
  {position: 13, name: 'eeee', weight: 6941, symbol: 'LbNagar'},

  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'LbNagar'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'LbNagar'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'LbNagar'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'LbNagar'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'LbNagar'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'LbNagar'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'LbNagar'},
];
@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
    // this.dataSource = new PaymentHistoryDataSource(this.paginator, this.sort);
    // this.dataSource.paginator=this.paginator;
  }
}
