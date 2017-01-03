import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';
@Component({
    moduleId : module.id,
    selector : 'artist',
    templateUrl : 'artist.component.html'
})
export class ArtistComponent implements OnInit{
    id : string;
    artist : any;
    constructor(private activatedRoute : ActivatedRoute,private spotifyService : SpotifyService){
        this.activatedRoute.params.subscribe(params => { this.id = params['id']; })                
    }
    ngOnInit(){
        console.log(this.id);
        this.getArtist();
    }

    getArtist(){
        this.spotifyService.getArtist(this.id).subscribe
        (res => this.artist=res);
    }
}