import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
    @Output() scrolled: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
      console.log('loaded');
  }

  onScroll() {
      console.log('scrolled');
      this.scrolled.emit(true);
  }
}
