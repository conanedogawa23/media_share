import { Component, OnInit, Inject  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-pendingaproval',
  templateUrl: './pendingaproval.component.html',
  styleUrls: ['./pendingaproval.component.css']
})
export class PendingaprovalComponent implements OnInit {
  panelOpenState = false;

  folders: Section[] = [
    {
      name: 'Ads Name',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Ads Name',
      updated: new Date('2/1/16'),
    },
    {
      name: 'Ads Name',
      updated: new Date('3/1/16'),
    },
    {
      name: 'Ads Name',
      updated: new Date('3/1/16'),
    }
  ];
  
  name : string;
  updatetd: Date;
  
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',height:'70%',
      data: {name: this.name, animal: this.updatetd}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.updatetd = result;
    });
  }
   

  ngOnInit() {
  }


}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['dialog-data-example-dialog.css']
})
export class DialogOverviewExampleDialog {

  selected = 'option2';

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Section) {}
    

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
