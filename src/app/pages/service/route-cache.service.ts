import { Injectable } from '@angular/core';
import { DetachedRouteHandle } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteCacheService {
  private cacheRouters = new Map<string, DetachedRouteHandle>();

  constructor() {}

  set(key: string, handle: DetachedRouteHandle) {
    console.log('set.cacheRouters', this.cacheRouters);
    this.cacheRouters.set(key, handle);
  }

  get(key: string): DetachedRouteHandle | null {
    return this.cacheRouters.get(key) || null;
  }

  has(key: string) {
    return this.cacheRouters.has(key);
  }

  remove(key: string) {
    console.log('remove.cacheRouters', this.cacheRouters);
    this.cacheRouters.delete(key);
  }

  destory() {
    this.cacheRouters.clear();
  }
}
