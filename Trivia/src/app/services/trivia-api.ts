import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TriviaApi {

  private theServerURL : string = "http://www.omdbapi.com/?i=tt3896198&apikey=8a8ceae&"

  private apiUrl : string = environment.omdbApiUrl;
  private apiKey : string = environment.omdbApiKey;

  theMovies : any[] =[]

  constructor(private http: HttpClient) {}

  async searchMovie(title: string) : Promise<any[]> { 
    const result = await lastValueFrom(this.http.get<any[]>(this.apiUrl + this.apiKey + 't={title}'.replace('{title}', title)));
    console.log(result);
    return result;
  }

  async getMovieById(id: string) : Promise<any> {
    const result = await lastValueFrom(this.http.get<any>(this.apiUrl + this.apiKey + 'i={id}'.replace('{id}', id)));
    console.log(result);
    return result;
  }


  // async addMovie(newMovie : any) : Promise<any> {
  //     const header = new HttpHeaders ({
  //             'Content-Type' : 'application/json'
  //     });

  //   return lastValueFrom(this.http.post(this.theServerURL, newMovie ));

  // }
  
}
