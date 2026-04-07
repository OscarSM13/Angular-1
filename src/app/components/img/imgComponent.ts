import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [],
  templateUrl: './imgComponent.html',
  styleUrl: './imgComponent.scss',
})
export class ImgComponent implements OnInit {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  defaultImage = '/default.webp';

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.defaultImage;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
