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
    albums : any;
    constructor(private activatedRoute : ActivatedRoute,private spotifyService : SpotifyService){
        this.activatedRoute.params.subscribe(params => { this.id = params['id']; });                
    }
    ngOnInit(){
        this.getArtist();
        this.getAlbums();
    }

    getArtist(){
        this.spotifyService.getArtist(this.id)
        .subscribe(res => {
            this.artist=res;
            // console.log(this.artist);
        });
    }
    getAlbums(){
        this.spotifyService.getAlbums(this.id)
        .subscribe(res => {
            this.albums = res.items;
            console.log(this.albums);
        })
    }
}