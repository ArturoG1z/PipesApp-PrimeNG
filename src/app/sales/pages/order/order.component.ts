import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent implements OnInit {
  uppercase: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleUppercase() {
    this.uppercase = !this.uppercase;
  }
}
