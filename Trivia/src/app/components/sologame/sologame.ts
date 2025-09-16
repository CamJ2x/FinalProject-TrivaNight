import { Component } from '@angular/core';
import { GameDataService } from '../../services/game-data-service';
import { OnInit } from '@angular/core';
import { TriviaApi } from '../../services/trivia-api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sologame',
  imports: [CommonModule, FormsModule],
  templateUrl: './sologame.html',
  styleUrl: './sologame.css'
})
export class Sologame implements OnInit {

  constructor(public gameData: GameDataService, public triviaApi: TriviaApi, private router: Router) {}

  movie: any = null;

  reveal: boolean = false;

  userInput : string = " ";
  result :string = " ";



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
    this.userInput = " ";
    this.result = " ";

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
/*
  revealAnswer() {
      this.reveal = !this.reveal;
  }
*/
  endGame() {
    // Navigate to end game component
    this.router.navigate(['/endGame']);
  }
  checkAnswer() {
    if (!this.movie) return;

    const correctTitle = this.movie?.Title?.toLowerCase().trim();
    const guess = this.userInput.toLowerCase().trim();

    if (guess === correctTitle) {
      this.gameData.addPoint();
      this.result = "Correct +1";
      console.log('Point added! Current score:', this.gameData.getScore());
      this.reveal = !this.reveal;
    } else {
      
      this.result = `Wrong! No points. : ${this.movie?.Title}`;
      this.reveal = !this.reveal;
    }

}
}
