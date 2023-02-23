import { Component, OnInit } from '@angular/core';
import { UnsplashDataService } from '../../services/unsplash-data.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  get photo(){
    return this._dataSvc.PhotoSelected;
  }

  constructor( private _dataSvc:UnsplashDataService){}

  ngOnInit(): void {}


}
