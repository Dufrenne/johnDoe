import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MoviesComponent } from './movies/movies.component';
import { HighlightDirective } from './highlight.directive';
import { MenuComponent } from './menu/menu.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';



const appRoutes: Routes = [
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: '',
    component: UserProfileComponent
  }
 ];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MoviesComponent,
    HighlightDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})


 
export class AppModule { }
