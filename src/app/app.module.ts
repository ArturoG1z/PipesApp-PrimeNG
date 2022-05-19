import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SalesModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
