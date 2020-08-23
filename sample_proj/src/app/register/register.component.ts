import { Component, OnInit } from '@angular/core';
// import {FormControl,Validators}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  selected = 'option2';
  constructor() {
    
   }

  ngOnInit() {
  }

}
