import { Component } from '@angular/core';
import { TriviaApi } from '../../services/trivia-api';

@Component({
  selector: 'app-sologame',
  imports: [],
  templateUrl: './sologame.html',
  styleUrl: './sologame.css'
})
export class Sologame {

  constructor(private triviaApi: TriviaApi) {}

  movie: any;

  testApi(): void {
     // FOR NOW YOU MANUALLY TYPE IN THE TITLE OF THE MOVIE YOU WANT TO HAVE POPULATE THE INFORMATION FIELD INSIDE THE SOLOGAME.html
    this.triviaApi.searchMovie("A Man Called Otto")
      .then((data: any) => {
        this.movie = data;
      })
      .catch((err: any) => {
        console.error('Error fetching movie:', err);
      });
  }

  ngOnInit(): void {
    // Something :)
  }

}
