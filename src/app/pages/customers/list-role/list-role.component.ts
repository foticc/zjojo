import { Component, OnInit } from '@angular/core';
import { DialogService, LoadingType, SortEventArg } from 'ng-devui';
import { DIALOG_PAGE_TYPE } from '../../data/page-field-config';
import { SimpleDialogService } from '../../service/simple-dialog.service';
import { ApiService } from './api.service';
import { ListRoleContentComponent } from './list-role-content/list-role-content.component';
import { roleImitateData, RoleType } from 'src/app/@core/mock/role-data';

interface queryCondition {
  path?: string;
}

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss'],
})
export class ListRoleComponent implements OnInit {
  total: number;
  content: Array<any>;
  pageIndex = 1;
  pageSize = 10;
  sortedColumn: SortEventArg[] = [];
  queryCondition: queryCondition = {};

  loading: LoadingType;

  constructor(private dialogService: DialogService, private api: ApiService, private dialog: SimpleDialogService) {}

  ngOnInit(): void {
    this.init();
  }

  public get queryParams(): queryCondition {
    const data = this.queryCondition;
    return Object.keys(data)
      .filter((key) => data[key] !== null && data[key] !== undefined && data[key] !== '')
      .reduce((acc, key) => ({ ...acc, [key]: data[key] }), {});
  }

  private init() {
    this.loading = this.api.permissionPage(this.pageIndex - 1, this.pageSize, this.queryParams).subscribe((v) => {
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
      content: ListRoleContentComponent,
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
    // this.openDialog({}, DIALOG_PAGE_TYPE.ADD);
    //模拟
    this.api.save(roleImitateData()).subscribe((v) => {
      this.init();
    });
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
