import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MyUppercasePipe } from './pipes/myuppercase.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    UncommonComponent,
    BasicsComponent,
    OrderComponent,
    MyUppercasePipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    UncommonComponent,
    BasicsComponent,
    OrderComponent,
  ],
})
export class SalesModule {}
