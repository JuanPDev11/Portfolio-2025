import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-pqrs',
  templateUrl: './info-pqrs.component.html',
  styleUrl: './info-pqrs.component.scss'
})
export class InfoPqrsComponent {
  constructor(public dialogRef: MatDialogRef<InfoPqrsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
   ){
  
   }
  
   close(){
    this.dialogRef.close();
   }
}
