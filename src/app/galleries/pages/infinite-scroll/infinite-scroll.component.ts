import { Component, OnInit } from '@angular/core';
import { RandomData } from '../../interfaces/random.interface';
import { Result } from '../../interfaces/search.interface';
import { UnsplashDataService } from '../../services/unsplash-data.service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit{

  //array que alimenta la galeria masonry
  listPhotos:RandomData[] = [];
  searchList:Result[]= [];

  pageNum:number = 1;
  searchPageNum:number = 1;

  onRandomOption:boolean = true;

  get newQuery(){
    return this._unsplashSvc.searchQuery;
  }


  /////////////////////////////////////////////////////

  constructor( private _unsplashSvc:UnsplashDataService){}

  ////////////////////////////////////////////////////


  ngOnInit(): void {
    this.getNewData();
  }


  //onScroll --> se dispara al hacer scroll aumentando pagenum y cargando así nuevas imágenes
  onScroll(){

    if(this.onRandomOption){
      this.pageNum++;
      this.getNewData();
    }else{
      this.searchPageNum++
      this.getDataByQuery()

    }
  }

  //query de búsqueda --> proviene del comp hijo / mandamos la query a servicios para obtener data
  //data incial en búsqueda
  getNewQuery(query:string){
    this.onRandomOption = false;
    this._unsplashSvc.searchQuery = query;
    this._unsplashSvc.getSearchPhotos(this.searchPageNum)
      .subscribe(data => {
        this.searchList = data.results;
      })
    

  }
  
    
  //Método que añade más páginas con imágenes random
  getNewData(){
    this._unsplashSvc.getPhotosByPage(this.pageNum)
    .subscribe(data => {
      //filtramos para que los objeto introducidos no se repitan
      var ids = new Set(this.listPhotos.map(d => d.id));
      this.listPhotos = [...this.listPhotos, ...data.filter(d=> !ids.has(d.id))]
    })
  }

  
  //método que añade más páginas a la búsqueda
  getDataByQuery(){
    this._unsplashSvc.getSearchPhotos(this.searchPageNum)
    .subscribe( data =>{ 
      this.searchList = [...this.searchList, ...data.results]
    })
  }

}
