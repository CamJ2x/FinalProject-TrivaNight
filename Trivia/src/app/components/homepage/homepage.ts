import { Component, OnInit } from '@angular/core';
import { TriviaApi } from '../../services/trivia-api';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  title = 'Movie Trivia';

  movieTrivia: string[] = [
    ' "Saw" (2004) was filmed in just 18 days but launched a massive horror franchise.',
    ' "Paranormal Activity" (2007) was made for only $15,000 and grossed over $190 million worldwide.',
    '  In "The Conjuring" (2013), the actors reported strange events happening on set, adding to its creepy reputation.',
    ' "Get Out" (2017) became the first horror film directed by an African-American to receive an Oscar nomination for Best Picture.',
    ' "A Quiet Place" (2018) used American Sign Language throughout the film, and many fans praised its authenticity.',
    ' "Hereditary" (2018) caused audience members to faint at early screenings due to its shocking imagery.',
    ' "It" (2017) became the highest-grossing horror film of all time, earning over $700 million worldwide.',
    ' "The Invisible Man" (2020) cleverly used empty space and camera framing to create tension, making audiences imagine the unseen villain.'
  ];
  
  trivia = ' ';

  constructor() {
    this.trivia = this.getRandomTrivia();
  }

  getRandomTrivia(): string {
    const index = Math.floor(Math.random() * this.trivia.length);
    return this.trivia[index];
  }
}