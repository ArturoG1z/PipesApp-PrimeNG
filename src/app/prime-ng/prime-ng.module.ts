import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DividerModule,
    InputTextModule,
    ListboxModule,
    MenuModule,
    MenubarModule,
    RippleModule,
  ],
})
export class PrimeNgModule {}
