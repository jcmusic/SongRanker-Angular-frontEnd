import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';
import { BandService } from './bands/band.service';
import { BandsComponent } from './bands/band-list.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: "Home - Song Ranker"}, 
    {path: 'songs', component: SongsComponent, title: "Songs - Song Ranker"},
    {path: 'bands', component: BandsComponent, title: "Bands - Song Ranker"},
    {path: '', component: HomeComponent, pathMatch: 'full'}, 
];
