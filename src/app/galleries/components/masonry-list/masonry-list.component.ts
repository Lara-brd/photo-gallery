import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-masonry-list',
  templateUrl: './masonry-list.component.html',
  styleUrls: ['./masonry-list.component.scss']
})
export class MasonryListComponent {

  @Input() photoList:any[]=[];

  masonryItems = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' },
  ];

}
