import { Component, OnInit } from '@angular/core';
import { MusicaService } from '../../services/musica.service';
import { RootObject } from '../../interfaces/musica';
import { Artista } from '../../interfaces/artista';
import { Albumes } from '../../interfaces/album';
import { Tracks, Datum } from '../../interfaces/track'; // Importar Datum
import { Canciones } from '../../interfaces/cancion';
import { ArtistaService } from '../../services/artista.service';
import { AlbumService } from '../../services/album.service';
import { TrackService } from '../../services/track.service';
import { CancionService } from '../../services/cancion.service';

@Component({
  selector: 'app-musica',
  standalone: false,
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
  articles!: RootObject;
  arti!: Artista;
  alal!: Albumes;
  trtr: Tracks = { data: [], total: 0, next: '' }; 
  cancan!: Canciones;
  art: string = "bts";
  can: string = "fake love";
  selectedTrack: Datum | null = null; // Cambiar el tipo de selectedTrack a Datum
  trackSeleccionado: Datum | null = null;

  mostrarTrack() {
    this.trackSeleccionado = this.selectedTrack;
  }

  constructor(
    private service: ArtistaService,
    private serviceArt: MusicaService,
    private serviceAlb: AlbumService,
    private serviceTr: TrackService,
    private serviceCa: CancionService
  ) {}

  ngOnInit(): void {
    this.cargarNew();
    this.cargarArtist();
    this.cargarAlbum();
    this.cargarTrack();
  }

  cargarNew() {
    this.serviceArt.getUsers(this.art).subscribe((result: RootObject) => {
      this.articles = result;
    });
  }

  cargarArtist() {
    this.service.getArtist(this.art).subscribe((result: Artista) => {
      this.arti = result;
    });
  }

  cargarAlbum() {
    this.serviceAlb.getAlbum(this.art).subscribe((result: Albumes) => {
      this.alal = result;
    });
  }

  cargarTrack() {
    this.serviceTr.getTrack(this.art).subscribe((result: Tracks) => {
      this.trtr = result;
    });
  }

  cargarCancion() {
    this.serviceCa.getCancion(this.can).subscribe((result: Canciones) => {
      this.cancan = result;
    });
  }


  scrollLeft(): void {
    const container = document.querySelector('.albumes section') as HTMLElement;
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' }); // Ajusta el desplazamiento a 300px
    }
  }
  
  scrollRight(): void {
    const container = document.querySelector('.albumes section') as HTMLElement;
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' }); // Ajusta el desplazamiento a 300px
    }
  }
}