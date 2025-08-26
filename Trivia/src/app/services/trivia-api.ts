import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaApi {

  private theServerURL : string = "http://www.omdbapi.com/?i=tt3896198&apikey=8a8ceae&"

  theMovies : any[] =[]

  constructor(private theServer:HttpClient) {}

  async getMovie() : Promise <any[]> { 

    const result : any[] = await lastValueFrom(this.theServer.get<any[]>(this.theServerURL))
    return result;

  }
  async addMovie(newMovie : any) : Promise<any> {

    const header = new HttpHeaders ({
            'Content-Type' : 'application/json'
    });

    return lastValueFrom(this.theServer.post(this.theServerURL, newMovie ));

  }
  
}
