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

@NgModule({
  declarations: [AppComponent, HeaderComponent,FooterComponent,NotfoundComponent,VideojuegosComponent,HomeComponent,SeriesComponent,TeamComponent,],
  imports: [CommonModule, BrowserModule,FormsModule, AppRoutingModule,HttpClientModule, ],

  bootstrap: [AppComponent],
})
export class AppModule {}
