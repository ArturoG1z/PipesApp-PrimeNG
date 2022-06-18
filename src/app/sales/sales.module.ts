import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsComponent } from './pages/basics/basics.component';
import { FliesPipe } from './pipes/flies.pipe';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { MyUppercasePipe } from './pipes/myuppercase.pipe';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    UncommonComponent,
    BasicsComponent,
    OrderComponent,
    MyUppercasePipe,
    FliesPipe,
    SortPipe,
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
