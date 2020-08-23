import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';

export interface Subscription {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-postads',
  templateUrl: './postads.component.html',
  styleUrls: ['./postads.component.css']
})
export class PostadsComponent implements OnInit {

  formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  fileToUpload: File = null;
  
  subscription: Subscription[] = [
    {value: 'noraml-0', viewValue: 'Normal'},
    {value: 'standared-1', viewValue: 'Standared'},
    {value: 'premium-2', viewValue: 'Premium'}
  ];

  toppings = new FormControl();
  toppingList: string[] = ['Hyderabad', 'LbNagar', 'Ammerpet', 'Uppal', 'Hitech City', 'Ram Nagar'];
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isOptional = false;
  toppingSelect;

  constructor(private _formBuilder: FormBuilder,private fb: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ''
    });
  }

  handleFileInput(files: FileList){
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
  }

}
