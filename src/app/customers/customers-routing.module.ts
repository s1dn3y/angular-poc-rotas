import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list/list.component';
import { NewCustomerComponent } from './new/new.component';
import { EditCustomerComponent } from './edit/edit.component';
import { DeleteCustomerComponent } from './delete/delete.component';

const routes: Routes = [{
  path: '',
  component: CustomersComponent,
  children: [
    {  path: '',
      component: ListCustomersComponent,
    },
    {  path: 'new',
      component: NewCustomerComponent,
    },
    {  path: 'edit',
      component: EditCustomerComponent,
    },
    {  path: 'delete',
      component: DeleteCustomerComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
