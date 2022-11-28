import { Component, OnInit } from '@angular/core';
import { DialogService, LoadingType, SortEventArg } from 'ng-devui';
import { ApiService } from '../../../api/api.service';
import { DIALOG_PAGE_TYPE } from '../../data/page-field-config';
import { SimpleDialogService } from '../../service/simple-dialog.service';
import { ListNetworkDemoContentComponent } from './list-network-demo-content/list-network-demo-content.component';

interface queryCondition {
  path?: string;
}

@Component({
  selector: 'app-list-network-demo',
  templateUrl: './list-network-demo.component.html',
  styleUrls: ['./list-network-demo.component.scss'],
})
export class ListNetworkDemoComponent implements OnInit {
  total: number;
  content: Array<any>;
  pageIndex = 0;
  pageSize = 10;
  sortedColumn: SortEventArg[] = [];
  queryCondition: queryCondition = {};

  loading: LoadingType;

  constructor(private dialogService: DialogService, private api: ApiService, private dialog: SimpleDialogService) {}

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.loading = this.api.permissionPage(this.pageIndex, this.pageSize, this.queryCondition).subscribe((v) => {
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
      content: ListNetworkDemoContentComponent,
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
    this.openDialog({}, DIALOG_PAGE_TYPE.ADD);
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
