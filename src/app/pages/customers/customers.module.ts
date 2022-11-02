import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { StyleListComponent } from './style-list/style-list.component';
import { TreeListComponent } from './tree-list/tree-list.component';

@NgModule({
  declarations: [CustomersComponent, CustomerListComponent, StyleListComponent, TreeListComponent],
  imports: [SharedModule, CustomersRoutingModule],
})
export class CustomersModule {}
