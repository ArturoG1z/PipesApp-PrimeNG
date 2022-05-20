import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  nameLower: string = 'joseph';
  nameUpper: string = 'JOSEPH';
  fullName: string = 'JosEph O\'ConnOr';
  date: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
