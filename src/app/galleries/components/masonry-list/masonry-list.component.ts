import { Component, Input } from '@angular/core';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UnsplashDataService } from '../../services/unsplash-data.service';
import { RandomData } from '../../interfaces/random.interface';

@Component({
  selector: 'app-masonry-list',
  templateUrl: './masonry-list.component.html',
  styleUrls: ['./masonry-list.component.scss']
})
export class MasonryListComponent {

  @Input() photoList:any[]=[];

  name:string = 'lara'

  //////////////////////////////

  constructor(
    private _dataSvc:UnsplashDataService, 
    public dialog:MatDialog,
    ){}

  /////////////////////////////

  openDialog(photo:any){
    this._dataSvc.PhotoSelected= photo;
    const dialogRef= this.dialog.open(
      DialogContentComponent, {
        height: '900px',
        width:'1500px'
      }
      );

  

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
