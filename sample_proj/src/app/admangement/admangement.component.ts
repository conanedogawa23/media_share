import { Component, OnInit,Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

export interface DialogData1 {
  animal: string;
  name: string;
}
export interface DialogData2 {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-admangement',
  templateUrl: './admangement.component.html',
  styleUrls: ['./admangement.component.css']
})
export class AdmangementComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  myClass="";
  animal: string;
  name: string;

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {
    if(this.isHandset$) {
      this.myClass = 'handset-ad-manage-card-holder';
      console.log('in if');
    } 
    else if(!this.isHandset$) {
      this.myClass = 'ad-manage-card-holder'
      console.log('in else');
    } else {
      console.log("dengey");
    }
  }
    // 
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AdmanageDialog, {
      width: '450px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(AdmanageDialog1, {
      width: '450px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(AdmanageDialog2, {
      width: '450px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  ngOnInit() {
    
  }

}

export interface Locations {
  id: string;
  name: string;
  location: string[]
}
export interface City {
  value: string;
  viewValue: string;
}

export interface Area {
  value: string;
  viewValue: string;
}
// admanage-dialog

@Component({
  selector: 'admanage-dialog',
  templateUrl : 'admanage-dialog.html',
  styleUrls: ['./admanage-dialog.css']

})
export class AdmanageDialog {
  city: City[] = [
    {value: 'steak-0', viewValue: 'city1'},
    {value: 'pizza-1', viewValue: 'city2'},
    {value: 'tacos-2', viewValue: 'city3'}
  ];
  area: Area[] = [
    {value: 'steak-0', viewValue: 'area1'},
    {value: 'pizza-1', viewValue: 'area2'},
    {value: 'tacos-2', viewValue: 'area3'}
  ];
  currentCnt: boolean= false;

  
  public expand(){
    this.currentCnt = true;
  }

  selected: string;
  selectedValues = [];
  constructor (
  public dialogRef: MatDialogRef<AdmanageDialog>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData)  {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectedFunc(parameter) {
    console.log("this is "+parameter);
    switch(parameter) {
      case this.places[1].name: {
        this.selectedValues=this.places[1].location;
        console.log(this.selectedValues);
        break;
      }
      case this.places[2].name: {
        this.selectedValues=this.places[2].location;
        console.log(this.selectedValues);
        break;
      }
      case this.places[3].name: {
        this.selectedValues=this.places[3].location;
        console.log(this.selectedValues);
        break;
      }
      default: this.selectedValues = this.places[0].location;
    }
  }

  places: Locations[] = [
    { id: "1", name: "none", location: ['no location added']},
    { id: "2", name: "Ad.1", location: ['hitechcity', 'marredpally', 'nagole']},
    { id: "3", name: "Ad.2", location: ['malakpet', 'begumpet', 'nagole']},
    { id: "4", name: "Ad.3", location: ['ameerpet', 'marredpally', 'nagole']},
  ];

}
// admanage-dialog1
@Component({
  selector: 'admanage-dialog1',
  templateUrl : 'admanage-dialog1.html',
  styleUrls: ['./admanage-dialog1.css']

})
export class AdmanageDialog1 {
  selected1 = 'option2';

  
  currentCnt: boolean= false;

  
  public expand(){
    this.currentCnt = true;
  }

  selected: string;
  selectedValues = [];
  constructor (
  public dialogRef: MatDialogRef<AdmanageDialog1>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData)  {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectedFunc(parameter) {
    console.log("this is "+parameter);
    switch(parameter) {
      case this.places[1].name: {
        this.selectedValues=this.places[1].location;
        console.log(this.selectedValues);
        break;
      }
      case this.places[2].name: {
        this.selectedValues=this.places[2].location;
        console.log(this.selectedValues);
        break;
      }
      case this.places[3].name: {
        this.selectedValues=this.places[3].location;
        console.log(this.selectedValues);
        break;
      }
      default: this.selectedValues = this.places[0].location;
    }
  }

  places: Locations[] = [
    { id: "1", name: "none", location: ['no subscription added']},
    { id: "2", name: "ola", location: ['Normal']},
    { id: "3", name: "23am worldwide", location: ['Premium']},
    { id: "4", name: "zomato", location: ['Standard']},
  ];

}
// admanage-dialog2

@Component({
  selector: 'admanage-dialog2',
  templateUrl : 'admanage-dialog2.html',
  styleUrls: ['./admanage-dialog2.css']

})
export class AdmanageDialog2 {
  
  currentCount: boolean= false;


  public expand1(){
    this.currentCount = false;
  }

  selected: string;
  selectedValues = [];
  constructor (
  public dialogRef: MatDialogRef<AdmanageDialog2>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData)  {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectedFunc(parameter) {
    console.log("this is "+parameter);
    switch(parameter) {
      case this.places[1].name: {
        this.selectedValues=this.places[1].location;
        console.log(this.selectedValues);
        break;
      }
      case this.places[2].name: {
        this.selectedValues=this.places[2].location;
        console.log(this.selectedValues);
        break;
      }
      case this.places[3].name: {
        this.selectedValues=this.places[3].location;
        console.log(this.selectedValues);
        break;
      }
      default: this.selectedValues = this.places[0].location;
    }
  }

  places: Locations[] = [
    { id: "1", name: "none", location: ['no location added']},
    { id: "2", name: "ola: Premium", location: ['hitechcity', 'marredpally', 'nagole']},
    { id: "3", name: "23am worldwide: Premium", location: ['gadwal', 'paradise', 'nagole']},
    { id: "4", name: "zomato: Standard", location: ['begumpet', 'marredpally', 'nagole']},
  ];

  public close_div(){
    this.dialogRef.close();
  }
  
}