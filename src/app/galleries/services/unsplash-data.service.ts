import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomData } from '../interfaces/random.interface';
import { Search } from '../interfaces/search.interface';

@Injectable({
  providedIn: 'root'
})
export class UnsplashDataService {
  
  searchQuery:string = '';

  key:string = "kc1LTGqcydpvmP_hn866YUHc5VTn_LKcMdo71u_gStg";
  url:string = "https://api.unsplash.com/";

  PhotoSelected:any;

  constructor( private http:HttpClient) { }

  
  // necesita un parámetro ( numero de página ) nos devuelve un observable al que nos subscribimos para obtener info de la api según página
  getPhotosByPage( pageNum:number){
    return this.http.get<RandomData[]>(`${this.url}photos/?client_id=${ this.key }&page=${pageNum}`)
  }

  //necesita un parámetro --> numero de página y utiliza la propiedad searchQuery, devuelve observable que proporcionara la data de la api según la búsqueda
  getSearchPhotos( pageNum:number){
    return this.http.get<Search>(`${this.url}search/photos?page=${pageNum}&query=${this.searchQuery}&client_id=${this.key}`)
  }


}
