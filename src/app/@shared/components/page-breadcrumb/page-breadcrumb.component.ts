import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, of, mergeMap, from, concat } from 'rxjs';
import { menuData, MenuItem } from '../../../../app/pages/data/store-data';
import { MenuClickServiceService } from '../side-menu/menu-click-service.service';

@Component({
  selector: 'app-page-breadcrumb',
  templateUrl: './page-breadcrumb.component.html',
  styleUrls: ['./page-breadcrumb.component.scss'],
})
export class PageBreadcrumbComponent implements OnInit, OnDestroy {
  data: Observable<any> = from(menuData);

  constructor(private router: Router, private menuItemChange: MenuClickServiceService) {
    this.menuItemChange.menuItem.subscribe((s) => {
      console.log('PageBreadcrumbComponent', s);
    });
    this.router.events
      .pipe(
        filter((evt) => evt instanceof NavigationEnd),
        map((m) => {
          return m as NavigationEnd;
        })
      )
      .subscribe((v) => {
        console.log('PageBreadcrumbComponent', v);
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  showdata() {}
}
