import { Routes } from '@angular/router';
import { Sologame } from './components/sologame/sologame';
import { Verusgame } from './components/verusgame/verusgame';

export const routes: Routes = [
    {path: 'Solo Trivia',        component: Sologame}, 
    {path: 'Play With Friends', component: Verusgame}
];
