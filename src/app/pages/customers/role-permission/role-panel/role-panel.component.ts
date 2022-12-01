import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataTableComponent, LoadingType, RowCheckChangeEventArg, RowSelectedEventArg } from 'ng-devui';
import { ApiService } from '../api.service';

interface queryCondition {
  roleName?: string;
}

@Component({
  selector: 'app-role-panel',
  templateUrl: './role-panel.component.html',
  styleUrls: ['./role-panel.component.scss'],
})
export class RolePanelComponent implements OnInit {
  @Input() select: any;
  @Output() selectChange = new EventEmitter<any>();

  roleHasMore: boolean = true;
  roleContent: Array<any> = [];

  rolePageIndex = 0;
  rolePageSize = 15;

  roleLoading: LoadingType;
  pageIndex: number;

  selectItem: any;

  queryCondition: queryCondition = {};

  @ViewChild(DataTableComponent, { static: true })
  datatable: DataTableComponent;

  constructor(private api: ApiService) {}

  public get queryParams(): queryCondition {
    const data = this.queryCondition;
    return Object.keys(data)
      .filter((key) => data[key] !== null && data[key] !== undefined && data[key] !== '')
      .reduce((acc, key) => ({ ...acc, [key]: data[key] }), {});
  }

  ngOnInit(): void {
    this.init(this.rolePageIndex);
  }

  private init(pageIndex: number) {
    if (this.roleHasMore) {
      this.roleLoading = this.api.page(pageIndex, this.rolePageSize, this.queryParams).subscribe((v) => {
        this.roleContent = this.roleContent.concat(v.content);
        this.roleHasMore = !v.last;
        // 默认选择第一个
        this.rowClick(0, 1, this.roleContent[0]);
      });
    }
  }

  onSearch(event: string) {
    this.queryCondition.roleName = event;
    this.roleLoading = this.api.page(this.pageIndex, this.rolePageSize, this.queryParams).subscribe((v) => {
      this.roleContent =v.content;
      this.roleHasMore = !v.last;
    });
    console.log('event', event);
  }

  loadMore(event) {
    this.rolePageIndex += 1;
    this.init(this.rolePageIndex);
  }

  rowClick(rowIndex, nestedIndex, rowItem) {
    this.selectItem = rowItem;
    this.select = rowItem;
    this.selectChange.emit(rowItem);
  }
}
