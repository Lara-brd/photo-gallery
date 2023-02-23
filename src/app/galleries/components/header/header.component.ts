import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() onNewQuery:EventEmitter<string> = new EventEmitter;
  @Output() onInputClosed:EventEmitter<boolean> = new EventEmitter;

  value:string = '';
  

  getQuery(){
    this.onNewQuery.emit(this.value);
  }

  closeInput(){
    this.value='';
    let closed:boolean = true;
    this.onInputClosed.emit(closed)
  }
}
