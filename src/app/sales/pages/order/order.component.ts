import { Component, OnInit } from '@angular/core';
import { Hero, Color } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent implements OnInit {
  uppercase: boolean = true;
  heroes: Hero[] = [
    { name: 'Windstorm', flies: true, color: Color.Red },
    { name: 'Bombasto', flies: false, color: Color.Green },
    { name: 'Magneta', flies: true, color: Color.Blue },
    { name: 'Tornado', flies: false, color: Color.Yellow },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleUppercase() {
    this.uppercase = !this.uppercase;
  }
}
