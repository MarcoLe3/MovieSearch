import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-dumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-dumb.html'
})
export class TV {
  @Input() movies: any[] = [];
}
