import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SeriesComponent } from './pages/series/series.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { MusicaComponent } from './pages/musica/musica.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'series', component: SeriesComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', component: NotfoundComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
