import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() onNewQuery:EventEmitter<string> = new EventEmitter;

  value:string = '';

  getQuery(){
    this.onNewQuery.emit(this.value);
  }
}
