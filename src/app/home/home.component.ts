import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imgpath:string="https://image.tmdb.org/t/p/w500/"
homemovie!:any[];
constructor(private movies:MoviesService)
{

}

ngOnInit(): void {
this.movies.getmovie().subscribe({
  next:(res)=>{this.homemovie=res.results
  }
})  
}}
