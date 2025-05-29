import { Component, OnInit } from '@angular/core';
import { comic } from '../../interfaces/libro'; // Adjust the path as necessary
import { ComicService } from '../../services/libro.service';

@Component({
  selector: 'app-libros',
  standalone: false,
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})

export class LibrosComponent implements OnInit{
  libro!: comic;
  com: string = ""; 
  ngOnInit(): void {
    this.lib();
  }

  constructor(private service: ComicService){

  }

  lib(){
    this.service.getcomic(this.com).subscribe((data:comic)=>{
      this.libro=data;
    });
  }

}