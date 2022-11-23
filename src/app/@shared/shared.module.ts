import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {
  LayoutModule,
  AccordionModule,
  SearchModule,
  AvatarModule,
  BadgeModule,
  DropDownModule,
  FormModule,
  TabsModule,
  TextInputModule,
  ToggleModule,
  ButtonModule,
  DrawerModule,
  DCommonModule,
  AlertModule,
  ToastModule,
  TooltipModule,
  RadioModule,
  BreadcrumbModule,
  ModalModule,
  DataTableModule,
  PaginationModule,
  IconModule,
  ReadTipModule,
  PopoverModule,
  SelectModule,
  CheckBoxModule,
  DatepickerModule,
  LoadingModule,
} from 'ng-devui';
import { RelativeTimeModule } from 'ng-devui/relative-time';
import { I18nModule } from 'ng-devui/i18n';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalizeComponent } from './components/personalize/personalize.component';
import { HeaderOperationComponent } from './components/header/header-operation/header-operation.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { DaGridModule } from './layouts/da-grid';
import { HeaderLogoComponent } from './components/header/header-logo/header-logo.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RegisterComponent } from './components/register/register.component';
import { TreeModule } from 'ng-devui/tree';
import { BreadcrumbTabComponent } from './components/breadcrumb-tab/breadcrumb-tab.component';
import { TabsPopoverMenuDirective } from './components/breadcrumb-tab/tabs-popover-menu.directive';
import { PageBreadcrumbComponent } from './components/page-breadcrumb/page-breadcrumb.component';

const DEVUI_MODULES = [
  LayoutModule,
  AccordionModule,
  SearchModule,
  AvatarModule,
  BadgeModule,
  DropDownModule,
  FormModule,
  TabsModule,
  TextInputModule,
  ToggleModule,
  ButtonModule,
  DrawerModule,
  BreadcrumbModule,
  RadioModule,
  ModalModule,
  DataTableModule,
  PaginationModule,
  TreeModule,
  IconModule,
  PopoverModule,
  SelectModule,
  CheckBoxModule,
  DatepickerModule,
  RelativeTimeModule,
  LoadingModule,
];
const COMPONENTS = [HeaderComponent, FooterComponent, NavbarComponent, PersonalizeComponent];
@NgModule({
  declarations: [
    LoginComponent,
    HeaderOperationComponent,
    HeaderLogoComponent,
    SideMenuComponent,
    RegisterComponent,
    ...COMPONENTS,
    BreadcrumbTabComponent,
    TabsPopoverMenuDirective,
    PageBreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    DCommonModule,
    AlertModule,
    ClipboardModule,
    ToastModule,
    TooltipModule,
    I18nModule,
    DaGridModule,
    ...DEVUI_MODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    HeaderLogoComponent,
    HeaderOperationComponent,
    I18nModule,
    DaGridModule,
    SideMenuComponent,
    BreadcrumbTabComponent,
    PageBreadcrumbComponent,
    ...DEVUI_MODULES,
    ...COMPONENTS,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
