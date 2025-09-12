import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private moviePool: any[] = [];
  private selectedMovies: any[] = [];
  private score = 0;
  private round = 0;
  

  private gameData: any = {};

  setGameData(data: any) {
    this.gameData = data;
  }

  getGameData() {
    return this.gameData;
  }

}
