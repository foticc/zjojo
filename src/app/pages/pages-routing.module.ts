import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'getting-started',
        loadChildren: () => import('./getting-started/getting-started.module').then((m) => m.GettingStartedModule),
        data: {
          title: '开始使用',
        },
      },
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then((m) => m.CustomersModule),
        data: {
          title: 'Double',
        },
      },
      {
        path: '',
        redirectTo: 'getting-started',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'getting-started',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
