import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';
@Component({
    moduleId : module.id,
    selector : 'album',
    templateUrl : 'album.component.html'
})
export class AlbumComponent implements OnInit{
    id : string;
    album : any;
    tracks : any;
    ngOnInit(){
        this.getAlbum();
        this.getTracks();
    }
    constructor(private route : ActivatedRoute,private spotify : SpotifyService){
        this.route.params.subscribe(params => { this.id = params['id']; })
    }
    getAlbum(){
        this.spotify.getAlbumDetails(this.id).subscribe(album => {
            console.log(album);
            this.album = album;
        })
    }
    getTracks(){
        this.spotify.getAlbumTracks(this.id).subscribe(tracks => {
            this.tracks = tracks.items;
            console.log(this.tracks);            
        })
    }
}