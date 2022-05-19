import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
    CardModule, ButtonModule, RippleModule, 
  ],
})
export class PrimeNgModule { }
