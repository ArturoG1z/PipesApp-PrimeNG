import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and dates', 
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numbers', 
            icon: 'pi pi-dollar',
            routerLink: '/numbers'
          },
          {
            label: 'No comunes', 
            icon: 'pi pi-globe',
            routerLink: '/uncommon'
          },
        ]
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
      }
    ];
  }
}
