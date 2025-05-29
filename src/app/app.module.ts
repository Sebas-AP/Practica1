import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';
import { SeriesComponent } from './pages/series/series.component';
import { TeamComponent } from './pages/team/team.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { MusicaComponent } from './pages/musica/musica.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LibrosComponent } from './pages/libros/libros.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    VideojuegosComponent,
    MusicaComponent,
    HomeComponent,
    SeriesComponent,
    TeamComponent,
    PeliculasComponent,
    LoginComponent,
    RegisterComponent,
    LibrosComponent,
  ],
  imports: [
    ChatComponent,
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
