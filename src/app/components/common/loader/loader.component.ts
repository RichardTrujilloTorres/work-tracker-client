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
  }

  onScroll() {
      this.scrolled.emit(true);
  }
}
