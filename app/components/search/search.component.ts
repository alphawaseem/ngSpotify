import { Component } from '@angular/core';
import { SpotifyService  } from '../../services/spotify.service';
import 'rxjs/add/operator/map';
@Component({
    moduleId : module.id,
    selector : 'search',
    templateUrl : 'search.component.html'
})
export class SearchComponent{
    constructor(private spotifyService : SpotifyService){

    }
    searchMusic(search:string){
        this.spotifyService.searchMusic(search).subscribe(result => console.log(result));
    }
}