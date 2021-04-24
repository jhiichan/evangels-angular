import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'videos', component: VideosComponent, data: {animation: 'VideosPage'} }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }