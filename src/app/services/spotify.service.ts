import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

   artistas:any[] = [];

   urlSpotify:string = 'https://api.spotify.com/v1/';

   token:string = "BQDm2spZmAo3VQOcBZcw9uhzjFoUtPB7ArvW95d3yKO_hEbUOZbVMcK1oI5L7skin_xbRxahKDuV582zkvw";

  constructor(public http:HttpClient) {
     console.log("servicio de spotify listo para usar")
  }

  private getHeaders():HttpHeaders {
     let headers = new HttpHeaders({
       'authorization': 'Bearer ' + this.token
     });
     return headers;
 }

  public getArtistas(termino : string){

     let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=10`;

     let headers = this.getHeaders();

     return this.http.get(url, {headers})
         .pipe( map((resp:any) => {
            this.artistas =  resp.artists.items;
            return this.artistas;
     }));

   }

   public getArtista(id:string){

      let url = `${ this.urlSpotify }artists/${ id }`;

      let headers = this.getHeaders();

      return this.http.get(url, {headers});
      //     .pipe( map((resp:any) => {
      //        this.artistas =  resp.artists.items;
      //        return this.artistas;
      // }));

   }

}
