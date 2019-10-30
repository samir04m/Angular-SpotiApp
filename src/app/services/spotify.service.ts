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

  public getArtistas(){

     let url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=10';

     let headers = new HttpHeaders({
        'authorization': 'Bearer BQBUfaC5VzKVW-X8jiq4ufNY-wqz6vW0CZ41tLfbHFsSyHAZ8uDU-zGH-GFaLJJQUWbHu2-Y4j4deMY72Nc'
     });

     return this.http.get(url, {headers})
         .pipe( map((resp:any) => {
            this.artistas =  resp.artists.items;
            return this.artistas;
     }));

 }

}
