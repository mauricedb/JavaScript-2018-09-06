import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class JokeItemComponent implements OnInit {
  @Input()
  joke = null;

  constructor() {}

  ngOnInit() {}

  doChange() {
    this.joke.joke = 'Een betere grap';
  }
}
