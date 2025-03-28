import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent,FooterComponent,NotfoundComponent,],
  imports: [CommonModule, BrowserModule, AppRoutingModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
