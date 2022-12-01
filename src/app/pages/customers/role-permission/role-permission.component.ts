import { Component, OnInit } from '@angular/core';
import { LoadingType, SortEventArg, PositionType, DialogService } from 'ng-devui';
import { originSource, SourceType } from 'src/app/@core/mock/originSource';
import { DIALOG_PAGE_TYPE } from '../../data/page-field-config';
import { SimpleDialogService } from '../../service/simple-dialog.service';
import { ApiService } from './api.service';
import { PermissionContentComponent } from './permission-content/permission-content.component';

interface queryCondition {
  path?: string;
  role?: string;
}

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss'],
})
export class RolePermissionComponent implements OnInit {
  total: number;
  content: Array<any>;
  pageIndex = 0;
  pageSize = 10;
  sortedColumn: SortEventArg[] = [];
  queryCondition: queryCondition = {};

  _mainRole: any;

  loading: LoadingType;

  constructor(private dialogService: DialogService, private api: ApiService, private dialog: SimpleDialogService) {}

  ngOnInit(): void {}

  public set mainRole(v: any) {
    this._mainRole = v;
    this.queryCondition.role = v.roleName;
    this.init();
  }

  public get queryParams(): queryCondition {
    const data = this.queryCondition;
    return Object.keys(data)
      .filter((key) => data[key] !== null && data[key] !== undefined && data[key] !== '')
      .reduce((acc, key) => ({ ...acc, [key]: data[key] }), {});
  }

  private init() {
    this.loading = this.api.permissionPage(this.pageIndex, this.pageSize, this.queryParams).subscribe((v) => {
      this.total = v.totalElements;
      this.content = v.content;
    });
  }

  pageIndexChange(pageIndex) {
    this.pageIndex = pageIndex;
    this.init();
  }
  pageSizeChange(pageSize) {
    this.pageSize = pageSize;
    this.init();
  }

  sortChange(sortArg: SortEventArg[]) {
    console.log('sortArg', sortArg);
  }

  reset() {
    this.pageIndex = 0;
    this.init();
  }

  private openDialog(data: any, type: string) {
    const results = this.dialogService.open({
      id: 'form-dialog',
      width: '700px',
      maxHeight: '500px',
      content: PermissionContentComponent,
      backdropCloseable: false,
      title: type,
      buttons: [],
      data: {
        data,
        type,
        onclose: () => {
          results.modalInstance.hide();
          this.init();
        },
      },
    });
  }

  editItem(rowitem) {
    this.openDialog(rowitem, DIALOG_PAGE_TYPE.EDIT);
  }

  openItem(rowitem) {
    this.openDialog(rowitem, DIALOG_PAGE_TYPE.OPEN);
  }

  add() {
    this.openDialog(
      {
        role: this._mainRole,
      },
      DIALOG_PAGE_TYPE.ADD
    );
  }

  delItem(rowItem) {
    const result = this.dialog.confirm(
      '确认删除吗?',
      () => {
        this.api.delete(rowItem.id).subscribe((v) => {
          console.log('v', v);
          result.modalInstance.hide();
        });
      },
      () => {
        this.init();
      }
    );
  }
}
