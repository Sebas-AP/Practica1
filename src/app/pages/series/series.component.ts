import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { SeriesResult } from '../../../interfaces/series';

@Component({
  selector: 'app-series',
  standalone:false,
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent implements OnInit {
  ser!: SeriesResult ; // Cambiado a un array para manejar múltiples resultados
  nom: string = 'none';

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.cargarSeries();
  }

  cargarSeries() {
    this.seriesService.getSeries(this.nom).subscribe((result: SeriesResult) => {
      this.ser = result; // Asigna el array de resultados
    });
  }
}