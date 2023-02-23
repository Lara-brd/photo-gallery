import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMasonryModule } from 'ngx-masonry';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { InfiniteScrollComponent } from './pages/infinite-scroll/infinite-scroll.component';
import { HeaderComponent } from './components/header/header.component';
import { MasonryListComponent } from './components/masonry-list/masonry-list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';



@NgModule({
  declarations: [
    HomeComponent,
    InfiniteScrollComponent,
    HeaderComponent,
    MasonryListComponent,
    InfiniteScrollComponent,
    DialogContentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxMasonryModule,
    InfiniteScrollModule, 
    MaterialModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class GalleriesModule { }
