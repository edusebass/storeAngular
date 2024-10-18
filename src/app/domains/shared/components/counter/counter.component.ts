import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    //corre una vez
    console.log('constructor');
    console.log('.'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //before and after
    console.log('.'.repeat(10));
  }

  ngOnInit() {
    //after render
    //una vez
    //async, then. subs
    console.log('init');
    console.log('.'.repeat(10));
  }
}
