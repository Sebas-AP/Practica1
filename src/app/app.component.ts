import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Practica1';
  ngOnInit(): void {}
  ngAfterViewInit(){
    this.crearScript("https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js");
    this.crearScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js");
    this.crearScript("assets/lib/wow/wow.min.js");
    this.crearScript("assets/lib/easing/easing.min.js");
    this.crearScript("assets/lib/waypoints/waypoints.min.js");
    this.crearScript("assets/lib/owlcarousel/owl.carousel.min.js");
  }
  crearScript(dir:string){
    const body = document.body;
    const script=document.createElement('script');
    script.innerHTML = '';
    script.src=dir;
    script.async=false;
    script.defer=true;
    body.appendChild(script);
  }
}
