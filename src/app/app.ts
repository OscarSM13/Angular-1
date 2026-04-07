import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './components/img/imgComponent';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ImgComponent,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  imgParent = '';

  ngOnInit(): void {
      
  }
  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
