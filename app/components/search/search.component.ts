import { Component } from '@angular/core';
import { SpotifyService  } from '../../services/spotify.service';
import 'rxjs/add/operator/map';
@Component({
    moduleId : module.id,
    selector : 'search',
    templateUrl : 'search.component.html'
})
export class SearchComponent{
    searchResults : any[];
    constructor(private spotifyService : SpotifyService){

    }
    searchMusic(search:string){
        this.spotifyService.searchMusic(search).subscribe(result => {
            this.searchResults = result;
            console.log(this.searchResults)
        });
    }
}