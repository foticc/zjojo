1. 在执行`ng add ng-devui-admin` 报错
   在 angular.json 中加入`"defaultProject": "your-progectname"`(因为高版本的 angular 中这个属性已经过时,用高版本的 cli 生成的项目没有包含该属性),详见 `@ng-devui-admin/src/ng-add/index.ts`
2. 某些 cli 命令 如`ng g`等,查看官方 cli 文档使用新版的命令
   新增页面
   此处页面指的是配置了路由之后，可以直接通过链接访问到的模块。

新增 module 文件
根据我们的目录结构，在 src/app/pages/下新建一个模块：

ng generate module customers --route customers --module pages.module
此时我们修改 src/app/pages/customers 下的文件，只需保留 customers.component.ts, customers.module.ts, customers-routing.module.ts 三个文件。

对于 customers.module.ts，我们进行如下修改：

import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/@shared/shared.module";
import { CustomersComponent } from "./customers.component";
import { CustomersRoutingModule } from "./customers-routing.module";

@NgModule({
declarations: [CustomersComponent],
imports: [SharedModule, CustomersRoutingModule], // 为了确保能够正常使用我们的区块，请在此处引入 SharedModule 模块
providers: [],
})
export class CustomersModule {}
对于 customers.component.ts，我们进行如下修改：

import { Component } from "@angular/core";

@Component({
selector: "app-customers",
template: `<router-outlet></router-outlet>`,
})
export class CustomersComponent {}
对于 customers-routing.module.ts，我们进行如下修改：

import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers.component";

// 在此处配置你的模块路由即可
const routes: Routes = [
{
path: "",
component: CustomersComponent,
children: [],
},
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class CustomersRoutingModule {}
至此我们已经完成了一个新的特性模块的创建。

新增 component 文件
在 customers 文件夹下通过下面的命令创建 component。

ng generate component customer-list
之后在 customers-routing.module.ts 中加入相关路由即可。

配置导航栏
完成以上步骤后你的导航栏中还没有一个可以通往你的特性模块的导航，那么最后一步就是配置你的导航栏。

在文件 src/app/pages/pages.component.ts 中，找到 updateMenu 方法，在其中添加你的特性模块相关的导航。

this.menu = [
......,
{
title: "Customers",
open: true,
children: [
{
title: "Customer List",
link: "/pages/customers/customer-list",
},
],
link: "/pages/customers",
menuIcon: "icon icon-console", // 你可以查询 DevUI 图标库选择一个适合的图标进行替换
},
];
