import { Component, OnInit } from '@angular/core';
import { DialogService, LoadingType, SortEventArg } from 'ng-devui';
import { ApiService } from '../../../api/api.service';
import { ListNetworkDemoContentComponent } from './list-network-demo-content/list-network-demo-content.component';

@Component({
  selector: 'app-list-network-demo',
  templateUrl: './list-network-demo.component.html',
  styleUrls: ['./list-network-demo.component.scss'],
})
export class ListNetworkDemoComponent implements OnInit {
  total: number;
  content: Array<any>;
  pageIndex = 1;
  pageSize = 10;
  sortedColumn: SortEventArg[] = [];

  loading: LoadingType;

  constructor(private dialogService: DialogService, private api: ApiService) {}

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.loading = this.api.permissionPage(this.pageIndex, this.pageSize).subscribe((v) => {
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
    this.pageIndex = 1;
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
      onClose: () => {},
      buttons: [],
      data: { data, type },
    });
  }

  editItem(rowitem) {
    this.openDialog(rowitem, '编辑');
  }

  openItem(rowitem) {
    this.openDialog(rowitem, '查看');
  }
}
