import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter, takeUntil, Subject, startWith } from 'rxjs';

interface MenuItem {
  title: string;
  icon?: string;
  path: string;
  isParent: boolean;
}

@Component({
  selector: 'app-page-breadcrumb',
  templateUrl: './page-breadcrumb.component.html',
  styleUrls: ['./page-breadcrumb.component.scss'],
})
export class PageBreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbs: MenuItem[] = [];
  private destory$ = new Subject<void>();

  constructor(private router: Router, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((evt) => evt instanceof NavigationEnd),
        takeUntil(this.destory$),
        startWith(true)
      )
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumbs(this.route);
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet === PRIMARY_OUTLET) {
        const routeUrl: string = child.snapshot.url
          .map((segment) => segment.path)
          .filter((path) => path)
          .join('/');
        const nextUrl = routeUrl ? `${url}/${routeUrl}` : url;
        if (routeUrl) {
          breadcrumbs.push({
            title: child.snapshot.data['title'] ? child.snapshot.data['title'] : '未命名',
            path: nextUrl,
            isParent: child.children.length > 0,
          });
        }
        return this.buildBreadcrumbs(child, nextUrl, breadcrumbs);
      }
    }
    return breadcrumbs;
  }
}
