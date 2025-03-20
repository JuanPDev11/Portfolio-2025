import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-project',
  templateUrl: './info-project.component.html',
  styleUrl: './info-project.component.scss'
})
export class InfoProjectComponent {
 constructor(public dialogRef: MatDialogRef<InfoProjectComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
 ){

 }

 close(){
  this.dialogRef.close();
 }
}
