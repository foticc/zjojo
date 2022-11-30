import { Component, OnInit } from '@angular/core';
import { LoadingType } from 'ng-devui';
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
  roleHasMore: boolean = true;
  roleContent: Array<any> = [];

  content: Array<any>;

  rolePageIndex = 0;
  rolePageSize = 15;

  roleLoading: LoadingType;
  pageIndex: number;

  queryCondition: queryCondition = {};

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
      });
    }
  }

  onSearch(event) {
    console.log('onSearch', event);
  }

  loadMore(event) {
    this.rolePageIndex += 1;
    this.init(this.rolePageIndex);
  }
}
