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

  ngOnInit(): void {
    // Something :)
  }

}
