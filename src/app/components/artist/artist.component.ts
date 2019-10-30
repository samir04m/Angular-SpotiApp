import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
               public _spotify:SpotifyService)
  {

  }

  ngOnInit() {
     this.activatedRoute.params
         .pipe(map(params => params['id']))
         .subscribe(id =>{
               console.log(id);
     });
  }

}
