import { Component, OnInit } from '@angular/core';
import { SteamService } from '../../services/steam.service';
import { Steam } from '../../../interfaces/steam';
import { DomSanitizer } from '@angular/platform-browser';
import { IconoService } from '../../services/icono.service';
import { Game, Juegos } from '../../../interfaces/juegos';

@Component({
  selector: 'app-videojuegos',
  standalone: false,
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css'
})
export class VideojuegosComponent implements OnInit{
  id: string = '1657630';
  constructor(
    private service: SteamService, // Servicio SteamService
    private iconoService: IconoService, // Servicio IconoService
    private sanitizer: DomSanitizer // Servicio DomSanitizer
  ) {}
  noticia!: Steam
  juegos: Game[] = []; // Propiedad para almacenar los juegos

  ngOnInit(): void {
    this.cargarJuegos();
    this.cargarSteam();
  }
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/img/404notfound-1024x683.png'; // Ruta de la imagen predeterminada
  }

  cargarSteam(): void {
    this.service.getSteam(this.id).subscribe({
      next: (response: Steam) => {
        // Filtrar las noticias para incluir solo aquellas con feed_type === 1
        response.appnews.newsitems = response.appnews.newsitems.filter(
          (item) => item.feed_type === 1
        );
  
        this.noticia = response;
  
        // Procesar imágenes y limpiar enlaces
        this.noticia.appnews.newsitems.forEach((item) => {
          this.procesarImagenes(item); // Procesar imágenes
          this.limpiarEnlaces(item); // Limpiar enlaces del contenido
        });
  
        console.log(this.noticia); // Depuración: Verificar los datos en la consola
      },
      error: (error) => {
        console.error('Error al cargar las noticias:', error); // Manejo de errores
      }
    });
  }
  private procesarImagenes(item: any): void {
    // Reemplazar {STEAM_CLAN_IMAGE} con la URL base
    item.contents = item.contents.replace(
      /\{STEAM_CLAN_IMAGE\}/g,
      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans'
    );

    // Extraer la URL de la imagen si existe
    const imageUrlMatch = item.contents.match(/https?:\/\/[^\s]+/);
    item.imageUrl = imageUrlMatch ? imageUrlMatch[0] : null;

    //item.contents = this.sanitizer.bypassSecurityTrustHtml(item.contents) as string;
  }
  private limpiarEnlaces(item: any): void {
    // Eliminar las URLs del contenido de texto
    item.contents = item.contents.replace(/https?:\/\/[^\s]+/g, '');
  }

  cargarJuegos(): void {
    this.iconoService.getIcon().subscribe({
      next: (response: Juegos) => {
        console.log('Datos recibidos de la API (juegos):', response); // Depuración

        if (response.response && response.response.games) {
          this.juegos = response.response.games; // Asignar los juegos a la propiedad
          this.juegos.forEach((game) => {
            this.procesarIconos(game); // Procesar íconos para cada juego
          });

          console.log('Juegos procesados:', this.juegos); // Depuración
        } else {
          console.error('Estructura de datos inesperada (juegos):', response);
        }
      },
      error: (error) => {
        console.error('Error al cargar los juegos:', error); // Manejo de errores
      }
    });
  }

  private procesarIconos(game: Game): void {
    if (game.img_icon_url) {
      // Construir la URL completa del ícono utilizando `img_icon_url`
      game.iconoUrl = `https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/library_600x900.jpg`;
      //https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/library_600x900.jpg
    } else {
      // Usar un ícono predeterminado si no hay `img_icon_url`
      game.iconoUrl = 'assets/img/default-icon.png';
    }
  }
}
