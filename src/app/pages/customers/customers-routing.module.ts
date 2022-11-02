import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersComponent } from './customers.component';
import { StyleListComponent } from './style-list/style-list.component';
import { TreeListComponent } from './tree-list/tree-list.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: 'customer-list',
        component: CustomerListComponent,
        data: {
          keepAlive: true,
        },
      },
      {
        path: 'style-list',
        component: StyleListComponent,
        data: {
          keepAlive: true,
        },
      },
      {
        path: 'tree-list',
        component: TreeListComponent,
        data: {
          keepAlive: true,
        },
      },
      { path: '', redirectTo: 'customer-list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
