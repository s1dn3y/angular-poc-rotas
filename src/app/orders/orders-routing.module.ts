import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { NewOrderComponent } from './new/new.component';
import { CancelOrderComponent } from './cancel/cancel.component';

const routes: Routes = [{
  path: '',
  component: OrdersComponent,
  children : [
    {
      path: '',
      component: NewOrderComponent
    },
    {
      path: 'cancel',
      component: CancelOrderComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
