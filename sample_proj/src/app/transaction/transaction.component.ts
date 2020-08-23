import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
export interface Transactions {
  adname: string;
  position: number;
  owner: string;
  area: string;
  payment:number;
  date:number;
}
const ELEMENT_DATA: Transactions[] = [
  {position: 1, adname: 'ola', owner: 'sai',area:'Lbnagar',payment:2000,date:22/2/2018},
  {position: 2, adname: 'education', owner: 'ram',area:'Kphp',payment:2000,date:22/2/2018},
  {position: 3, adname: 'tsss', owner: 'sai',area:'Lbnagar',payment:2000,date:22/2/2018},
  {position: 4, adname: 'psss', owner: 'sai',area:'Lbnagar',payment:2000,date:22/2/2018},
  {position: 5, adname: 'Hydrogen', owner: 'sai',area:'Lbnagar',payment:2000,date:22/2/2018},
  {position: 6, adname: 'Hydrogen', owner: 'sai',area:'Lbnagar',payment:2000,date:22/2/2018},
  {position: 7, adname: 'Hydrogen', owner: 'sai',area:'Lbnagar',payment:2000,date:22/2/2018},
  {position: 8, adname: 'Hydrogen', owner: 'sai',area:'Lbnagar',payment:2000,date:22/2/2018},
  {position: 9, adname: 'Hydrogen', owner: 'sai',area:'Lbnagar',payment:2000,date:22/2/2018},
  {position: 10, adname: 'Hydrogen', owner: 'sai',area:'Lbnagar',payment:2000,date:22/2/2018},



];
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent  {

  displayedColumns: string[] = ['position', 'adname', 'owner', 'area','payment','date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
