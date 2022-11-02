import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, NavigationStart, ResolveEnd, Router, RoutesRecognized } from '@angular/router';
import { filter, Observable, of, map, tap } from 'rxjs';
import { Meta } from './Meta';

@Injectable({
  providedIn: 'root',
})
export class VisitedService {
  visited: Meta[] = [];
  loadRoute: Observable<Meta[]>;

  constructor() {
    this.loadRoute = of(this.visited);
  }

  push(data: ActivationEnd) {
    // type of 'undefined'
    if (data.snapshot.component != null && data.snapshot.routeConfig.path) {
      console.log('data.state.root.data', data.snapshot);
      console.log('data.state.root.data', data.snapshot['_routerState']['url']);

      const { snapshot } = data;

      if (!this.visited.some((s) => s.path === snapshot['_routerState']['url'])) {
        this.visited.push({
          path: snapshot['_routerState']['url'],
          title: snapshot['_routerState']['url'],
          fixed: snapshot.data['fixed'] ? snapshot.data['fixed'] : false,
        });
      }
    }
  }

  get history(): Observable<Meta[]> {
    return this.loadRoute;
  }

  clearAll() {
    this.loadRoute.subscribe((s) => {
      console.log('s', s);
    });
  }
}
