import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';



@NgModule({
  declarations: [
    NumbersComponent,
    UncommonComponent,
    BasicsComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersComponent,
    UncommonComponent,
    BasicsComponent,
    OrderComponent,
  ]
})
export class SalesModule { }
