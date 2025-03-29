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
  ser: any=null ; // Cambiado a un array para manejar múltiples resultados
  nom: string = '';

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.cargarSeries();
  }

  cargarSeries() {
    if (this.nom.trim() !== '') {
      this.seriesService.getSeries(this.nom).subscribe((result: any) => {
        this.ser = result; // Asigna los datos obtenidos del servicio
      });
    }
  }
}