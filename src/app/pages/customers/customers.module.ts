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
import { ListUserComponent } from './list-user/list-user.component';
import { ListUserContentComponent } from './list-user/list-user-content/list-user-content.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { ListRoleContentComponent } from './list-role/list-role-content/list-role-content.component';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import { RolePanelComponent } from './role-permission/role-panel/role-panel.component';
import { PermissionContentComponent } from './role-permission/permission-content/permission-content.component';
import { UserRoleBindComponent } from './list-user/user-role-bind/user-role-bind.component';
import { GreedySnakeComponent } from './multiple-block/greedy-snake/greedy-snake.component';

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
    ListUserComponent,
    ListUserContentComponent,
    ListRoleComponent,
    ListRoleContentComponent,
    RolePermissionComponent,
    RolePanelComponent,
    PermissionContentComponent,
    UserRoleBindComponent,
    GreedySnakeComponent,
  ],
  imports: [SharedModule, DynamicFormsModule, CustomersRoutingModule],
})
export class CustomersModule {}
