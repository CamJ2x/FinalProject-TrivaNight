import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TriviaInfoLayout } from './interfaces/trivia-info-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TriviaApi } from './services/trivia-api';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

  export class App implements OnInit {

  protected title = 'Trivia Night ';

  constructor(private triviaApi: TriviaApi) {}


  theMovies : any[] = [];


  newTrivia : TriviaInfoLayout = {
                                      id: 0,
                                      title : "",
                                      year : "",
                                      genre: "",
                                      actors : "",
                                      plot : ""
                                   }

  async ngOnInit() 
  {
  this.theMovies = await this.triviaApi.getMovie();
  }
  
  async addMovie(newMovie : TriviaInfoLayout) {
   
    await this.triviaApi.addMovie(this.newTrivia)
  
    this.theMovies = await this.triviaApi.getMovie()
  }
  
 

}
