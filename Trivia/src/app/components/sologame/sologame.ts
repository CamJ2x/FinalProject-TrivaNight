import { Component } from '@angular/core';
import { TriviaApi } from '../../services/trivia-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sologame',
  imports: [CommonModule, FormsModule],
  templateUrl: './sologame.html',
  styleUrl: './sologame.css'
})
export class Sologame {

  constructor(private triviaApi: TriviaApi) {}

  movie: any;

  ngOnInit(): void {
    // FOR NOW YOU MANUALLY TYPE IN THE TITLE OF THE MOVIE YOU WANT TO HAVE POPULATE THE INFORMATION FIELD INSIDE THE SOLOGAME.html
    this.triviaApi.searchMovie("Avengers")
      .then((data: any) => {
        this.movie = data;
      })
      .catch((err: any) => {
        console.error('Error fetching movie:', err);
      });
  }

}
