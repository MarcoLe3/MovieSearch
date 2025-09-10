import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { TV } from '../dumb/movie-dumb';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-movie-smart',
  standalone: true,
  imports: [CommonModule, FormsModule, TV],
  templateUrl: './movie-smart.html',
})
export class Remote {
  searchTerm = '';
  movies: any[] = [];

  constructor(private http: HttpClient) {}

  async searchMovie() {
    const apiKey = environment.omdbApiKey;
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${this.searchTerm}`;

    try {
      const res: any = await firstValueFrom(this.http.get(url));
      this.movies = res.Search || [];
    } catch (err) {
      console.log(err);
    }
  }
}
