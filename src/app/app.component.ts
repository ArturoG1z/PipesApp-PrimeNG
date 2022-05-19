import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pipesApp';
  name: string = 'Arturo GOnzAlez';
  value: number = 100100100100;
  obj = {
    brother: 'Juan',
  }

  constructor(private primeNGConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }

  showName() {
    console.log(this.name);
  }

}
