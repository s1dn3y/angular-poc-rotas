import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { NewOrderComponent } from './new/new.component';
import { CancelOrderComponent } from './cancel/cancel.component';


@NgModule({
  declarations: [
    OrdersComponent,
    NewOrderComponent,
    CancelOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
