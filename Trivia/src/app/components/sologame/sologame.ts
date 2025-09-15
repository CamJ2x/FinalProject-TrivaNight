import { Component } from '@angular/core';
import { GameDataService } from '../../services/game-data-service';
import { OnInit } from '@angular/core';
import { TriviaApi } from '../../services/trivia-api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sologame',
  imports: [CommonModule],
  templateUrl: './sologame.html',
  styleUrl: './sologame.css'
})
export class Sologame implements OnInit {

  constructor(public gameData: GameDataService, public triviaApi: TriviaApi, private router: Router) {}

  movie: any = null;

  reveal: boolean = false;

  testApi(): void {
       // Example of fetching by title

    // this.triviaApi.searchMovie("A Man Called Otto")
    //   .then((data: any) => {
    //     this.movie = data;
    //   })
    //   .catch((err: any) => {
    //     console.error('Error fetching movie:', err);
    //   });

      // Example of fetching by ID

      this.triviaApi.getMovieById("tt0458339")
      .then((data: any) => {
        this.movie = data;
        console.log("Movie fetched by ID:", data);
      })
      .catch((err: any) => {
        console.error('Error fetching movie by ID:', err);
      });
  }

  ngOnInit() {
    this.gameData.loadMoviePool().subscribe(ids => {
    this.gameData.setMoviePool(ids);
    this.gameData.startNewGame(10);
    this.loadMovie();
});
  }

  async loadMovie() {
    this.movie = await this.gameData.getCurrentMovie();
  }

  next() {
    this.gameData.nextRound();
    if (this.gameData.getRound() < this.gameData.getTotalRounds()) {
      this.loadMovie();
    } else {
      console.log('Game over. Final score:', this.gameData.getScore());
    }
  }

  addPoint() {
    this.gameData.addPoint();
    console.log('Point added! Current score:', this.gameData.getScore());
  }

  revealAnswer() {
      this.reveal = !this.reveal;
  }

  endGame() {
    // Navigate to end game component
    this.router.navigate(['/endGame']);
  }

}
