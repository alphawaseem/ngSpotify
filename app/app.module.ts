import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './components/navbar/navbar.component';
import { AppComponent }  from './app.component';
import { RouterModule,Routes }   from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';



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
      }
]

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent,NavBarComponent,SearchComponent,AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
