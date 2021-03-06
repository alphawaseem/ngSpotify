import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SpotifyService{
    constructor(private http : Http){
    }
    searchMusic(query:string,type:string="artist"){
        return this.http.get(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
        .map(res => res.json().artists.items);
    }
    getArtist(id:string){
        return this.http.get(`https://api.spotify.com/v1/artists/${id}`)
        .map(res => res.json());
    }
    getAlbums(artistId:string){
        return this.http.get(`https://api.spotify.com/v1/artists/${artistId}/albums`)
        .map(res => res.json());
    }
    getAlbumDetails(albumId:string){
        return this.http.get(`https://api.spotify.com/v1/albums/${albumId}`)
        .map(res => res.json());
    }
    getAlbumTracks(albumId:string){
        return this.http.get(`https://api.spotify.com/v1/albums/${albumId}/tracks/`)
        .map(res => res.json());
    }

}