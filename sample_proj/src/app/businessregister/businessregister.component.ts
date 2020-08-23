import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface Country {
  value: string;
  viewValue: string;
}

export interface State {
  value: string;
  viewValue: string;
}

export interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-businessregister',
  templateUrl: './businessregister.component.html',
  styleUrls: ['./businessregister.component.css']
})
export class BusinessregisterComponent implements OnInit {
  
  country: Country[] = [
    {value: 'steak-0', viewValue: 'China'},
    {value: 'pizza-1', viewValue: 'Dubai'},
    {value: 'tacos-2', viewValue: 'India'}
  ];

  state: State[] = [
    {value: 'steak-0', viewValue: 'Telangana'},
    {value: 'pizza-1', viewValue: 'AndraPradesh'},
    {value: 'tacos-2', viewValue: 'TamilNadu'}
  ];

  city: City[] = [
    {value: 'steak-0', viewValue: 'Telangana'},
    {value: 'pizza-1', viewValue: 'AndraPradesh'},
    {value: 'tacos-2', viewValue: 'TamilNadu'}
  ];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup=this._formBuilder.group({
      thirdCtrl:['',Validators.required]
    })
  }

}
