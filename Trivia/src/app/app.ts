import { Component, OnInit } from '@angular/core';
import { TriviaInfoLayout } from './interfaces/trivia-info-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TriviaApi } from './services/trivia-api';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

  export class App {

  // protected title = 'Trivia Night ';

  // constructor(private triviaApi: TriviaApi) {}


  // theMovies : any[] = [];


  // newTrivia : TriviaInfoLayout = {
  //                                     id: 0,
  //                                     title : " ",
  //                                     genre: " ",
  //                                     actors : " ",
  //                                     plot : " "
  //                                  }

  // async ngOnInit() 
  // {
  // const movie = await this.triviaApi.searchMovie(" ");
  //   this.theMovies = [movie];
  // }
  
  // async addMovie(newMovie : TriviaInfoLayout) {
  //   await this.triviaApi.addMovie(this.newTrivia);
  //   const movie = await this.triviaApi.searchMovie(" ");
  //   this.theMovies = [movie];
  // }
}
