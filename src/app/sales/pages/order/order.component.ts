import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
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
    { name: 'Mr. O', flies: true, color: Color.Red },
    { name: 'Mr. X', flies: false, color: Color.Green },
    { name: 'Superman', flies: true, color: Color.Blue },
    { name: 'Batman', flies: false, color: Color.Yellow },
  ];
  orderBy: string = 'none';

  constructor() {}

  ngOnInit(): void {}

  toggleUppercase() {
    this.uppercase = !this.uppercase;
  }

  changeSortOrder(orderBy: string) {
    this.orderBy = orderBy;
  }

  clear(table: Table) {
    table.clear();
  }
}
