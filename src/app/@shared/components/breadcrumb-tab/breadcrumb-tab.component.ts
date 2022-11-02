import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeAxisComponent } from 'ng-devui';
import { Meta } from 'src/app/pages/service/Meta';
import { RouteCacheService } from 'src/app/pages/service/route-cache.service';

import { VisitedService } from 'src/app/pages/service/visited.service';

@Component({
  selector: 'app-breadcrumb-tab',
  templateUrl: './breadcrumb-tab.component.html',
  styleUrls: ['./breadcrumb-tab.component.scss'],
})
export class BreadcrumbTabComponent implements OnInit {
  tabs: Meta[] | undefined;
  popoverVisible = false;
  rightClickTab: Meta = null;
  currentTab: Meta = null;

  left = 0;
  top = 0;

  constructor(private routeHistory: VisitedService, private router: Router, private routeCache: RouteCacheService) {}

  ngOnInit(): void {
    this.routeHistory.history.subscribe((v) => {
      this.tabs = v;
    });
  }

  selectTab(tab: Meta) {
    console.log('selectTab', tab);
    this.currentTab = tab;
  }

  contextMenu(tag: Meta, event: MouseEvent) {
    event.preventDefault();
    if (!tag.fixed) {
      this.top = event.clientY;
      this.left = event.clientX;
      this.popoverVisible = true;
      this.rightClickTab = tag;
    }
  }

  closeTab(tab: Meta) {
    if (tab == null) {
      return;
    }
    if (tab.fixed) {
      return;
    }
    const index = this.tabs.indexOf(tab);
    if (index > 0) {
      this.tabs.splice(index, 1);
      if (this.currentTab.path === tab.path) {
        const last = this.tabs.slice(-1)[0];
        this.switchTab(last);
      }
    }
  }

  closeAllTabs() {
    this.tabs.length = 0;
  }

  closeOtherTabs() {
    if (this.rightClickTab === null) {
      return;
    }
    this.tabs.forEach((item, index, array) => {
      console.log('array', array);
      console.log('item', item);
      if (item.path !== this.rightClickTab.path) {
        this.tabs.splice(index, 1);
        this.switchTab(this.rightClickTab);
      }
    });
  }

  switchTab(tab: Meta) {
    this.router.navigateByUrl(tab.path);
  }

  removeCache(tab: Meta) {
    console.log('removeCache(%s)', tab.path);
    this.routeCache.remove(tab.path);
  }
}
