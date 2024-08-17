import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list/list.component';
import { NewCustomerComponent } from './new/new.component';
import { EditCustomerComponent } from './edit/edit.component';
import { DeleteCustomerComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
