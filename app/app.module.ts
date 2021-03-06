import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './components/navbar/navbar.component';
import { AppComponent }  from './app.component';
import { RouterModule,Routes }   from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { SpotifyService } from './services/spotify.service';
import { HttpModule } from '@angular/http';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const routes : Routes = [
  {
        path: '',
        redirectTo: 'home',
        pathMatch : 'full' 
      },
      {
        path: 'home',
        component: SearchComponent
      },{
        path : 'about',
        component : AboutComponent
      },{
         path: 'artist/:id',
        component: ArtistComponent
      },{
        path : 'album/:id',
        component : AlbumComponent
      }
      
]

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(routes),HttpModule ],
  declarations: [ AppComponent,NavBarComponent,SearchComponent,AboutComponent,
    ArtistComponent,AlbumComponent],
  bootstrap:    [ AppComponent ],
  providers : [SpotifyService]
})
export class AppModule { }
