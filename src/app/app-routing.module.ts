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
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'series', component: SeriesComponent, canActivate: [AuthGuard] },
  { path: 'libros', component: LibrosComponent, canActivate: [AuthGuard] },
  { path: 'musica', component: MusicaComponent, canActivate: [AuthGuard] },
  { path: 'peliculas', component: PeliculasComponent, canActivate: [AuthGuard] },
  { path: 'videojuegos', component: VideojuegosComponent, canActivate: [AuthGuard] },
  { path: 'team', component: TeamComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
 