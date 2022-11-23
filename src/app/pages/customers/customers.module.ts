import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { DynamicFormsModule } from 'src/app/@shared/components/dynamic-forms/dynamic-forms.module';

import { CustomerListComponent } from './customer-list/customer-list.component';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { StyleListComponent } from './style-list/style-list.component';
import { TreeListComponent } from './tree-list/tree-list.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { MultipleBlockComponent } from './multiple-block/multiple-block.component';
import { ListModalFormsComponent } from './list-modal-forms/list-modal-forms.component';
import { ModalFormContentComponent } from './list-modal-forms/modal-form-content/modal-form-content.component';
import { ListModalFormsDclumnComponent } from './list-modal-forms-dclumn/list-modal-forms-dclumn.component';
import { ModalFormColumnContentComponent } from './list-modal-forms-dclumn/modal-form-content/modal-form-content.component';
import { ListNetworkDemoComponent } from './list-network-demo/list-network-demo.component';
import { ListNetworkDemoContentComponent } from './list-network-demo/list-network-demo-content/list-network-demo-content.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    StyleListComponent,
    TreeListComponent,
    DynamicFormsComponent,
    MultipleBlockComponent,
    ListModalFormsComponent,
    ModalFormContentComponent,
    ListModalFormsDclumnComponent,
    ModalFormColumnContentComponent,
    ListNetworkDemoComponent,
    ListNetworkDemoContentComponent,
  ],
  imports: [SharedModule, DynamicFormsModule, CustomersRoutingModule],
})
export class CustomersModule {}
