import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersComponent } from './customers.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { ListModalFormsComponent } from './list-modal-forms/list-modal-forms.component';
import { MultipleBlockComponent } from './multiple-block/multiple-block.component';
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
          title: '样式列表',
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
      {
        path: 'dynamic-form',
        component: DynamicFormsComponent,
        data: {
          title: '动态表单',
        },
      },
      {
        path: 'multiple-block',
        component: MultipleBlockComponent,
        data: {
          title: '多区块',
        },
      },
      {
        path: 'list-modal',
        component: ListModalFormsComponent,
        data: {
          title: '测试',
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
