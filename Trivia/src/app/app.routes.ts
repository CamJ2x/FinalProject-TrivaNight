import { Routes } from '@angular/router';
import { Sologame } from './components/sologame/sologame';
import { Homepage } from './components/homepage/homepage';
import { GameSelection } from './components/game-selection/game-selection';
import { EndGameComponent } from './components/end-game-component/end-game-component';

export const routes: Routes = [
    {path: '',   redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',          component: Homepage},
    {path: 'soloGame',      component: Sologame}, 
    {path: 'gameSelection', component: GameSelection},
    {path: 'endGame',  component: EndGameComponent},

];
