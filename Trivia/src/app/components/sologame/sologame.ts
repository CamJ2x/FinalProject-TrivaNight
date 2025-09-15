import { Component } from '@angular/core';
<<<<<<< HEAD
import { LeaderboardComponent } from '../leaderboard/leaderboard';
=======
import { GameDataService } from '../../services/game-data-service';
import { OnInit } from '@angular/core';
>>>>>>> 19fa0d6f65cf500bb34f0bbcef3ba26318ced256
import { TriviaApi } from '../../services/trivia-api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sologame',
<<<<<<< HEAD
  standalone: true,                 
  imports: [LeaderboardComponent],
=======
  imports: [CommonModule],
>>>>>>> 19fa0d6f65cf500bb34f0bbcef3ba26318ced256
  templateUrl: './sologame.html',
  styleUrls: ['./sologame.css']      
})
export class Sologame implements OnInit {

<<<<<<< HEAD
  movie: any;

  leaderboard = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 95 },
    { name: 'Charlie', score: 75 },
  ];

  constructor(private triviaApi: TriviaApi) {}

  testApi(): void {
     // FOR NOW YOU MANUALLY TYPE IN THE TITLE OF THE MOVIE YOU WANT TO HAVE POPULATE THE INFORMATION FIELD INSIDE THE SOLOGAME.html
    this.triviaApi.searchMovie("A Man Called Otto")
=======
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
>>>>>>> 19fa0d6f65cf500bb34f0bbcef3ba26318ced256
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
