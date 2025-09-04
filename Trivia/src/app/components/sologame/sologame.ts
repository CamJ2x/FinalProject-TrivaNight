import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-sologame',
  imports: [CommonModule, FormsModule],
  templateUrl: './sologame.html',
  styleUrl: './sologame.css'
})
export class Sologame {
  pageTitle = " Solo Play"
}
