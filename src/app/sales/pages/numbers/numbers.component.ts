import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent implements OnInit {
  netSales: number = 234235251.2121;
  percent: number = 0.12;
  constructor() { }

  ngOnInit(): void {
  }

}
