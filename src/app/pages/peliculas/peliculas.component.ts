import { Component, OnInit } from '@angular/core';
import { PeliculasServiceService } from '../../services/peliculas-service.service';
import { datos_Peliculas } from '../../../interfaces/peliculas'; // Adjust the path as needed


@Component({
  selector: 'app-peliculastri',
  standalone: false,
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {
  pel!: datos_Peliculas;
  
  pelimovies: string = "";
  constructor(private service: PeliculasServiceService ) { }

  ngOnInit(): void {
    this.Mov();
  }

  Mov(){
    this.service.URP(this.pelimovies).subscribe((data: datos_Peliculas ) => {
      this.pel = data;
    });
  }
  
}
