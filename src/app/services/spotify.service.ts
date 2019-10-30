import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

   artistas:any[] = [];

  constructor(public http:HttpClient) {
     console.log("servicio de spotify listo para usar")
  }

  public getArtistas(termino : string){

     let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&limit=10`;

     let headers = new HttpHeaders({
        'authorization': 'Bearer BQDm2spZmAo3VQOcBZcw9uhzjFoUtPB7ArvW95d3yKO_hEbUOZbVMcK1oI5L7skin_xbRxahKDuV582zkvw'
     });

     return this.http.get(url, {headers})
         .pipe( map((resp:any) => {
            this.artistas =  resp.artists.items;
            return this.artistas;
     }));

 }

}
