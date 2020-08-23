import { Component, OnInit } from '@angular/core';
import { LoginTabadService } from "../services/login-tabad.service";
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {

  hide = true;

  constructor( private loginService:LoginTabadService ) {}

  tiles: Tile[] = [
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  

  ngOnInit() {
  }

  login () {
    // this.loginService.sendApiData();
    let testGetReq = this.loginService.sendApiData().subscribe((data:any)=> {
      console.log(data);
    });
  }

}
