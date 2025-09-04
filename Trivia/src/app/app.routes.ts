import { Routes } from '@angular/router';
import { Sologame } from './components/sologame/sologame';
import { Verusgame } from './components/verusgame/verusgame';
import { Homepage } from './components/homepage/homepage';

export const routes: Routes = [
    {path: '',   redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',       component: Homepage},
    {path: 'soloGame',   component: Sologame}, 
    {path: 'versusGame', component: Verusgame}
];
