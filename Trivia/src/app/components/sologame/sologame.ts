import { Component } from '@angular/core';
import { LeaderboardComponent } from '../leaderboard/leaderboard';
import { TriviaApi } from '../../services/trivia-api';

@Component({
  selector: 'app-sologame',
  standalone: true,                 
  imports: [LeaderboardComponent],
  templateUrl: './sologame.html',
  styleUrls: ['./sologame.css']      
})
export class Sologame {

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
      .then((data: any) => {
        this.movie = data;
        console.log("Movie fetched by ID:", data);
      })
      .catch((err: any) => {
        console.error('Error fetching movie by ID:', err);
      });
  }

  ngOnInit(): void {
    // Something :)
  }
}
