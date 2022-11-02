import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
import { RouteCacheService } from './service/route-cache.service';

@Injectable({
  providedIn: 'root',
})
export class CacheResuseStrategy implements RouteReuseStrategy {
  constructor(private cacheRouters: RouteCacheService) {}

  /**
   * 确定是否复用路由
   * @param {ActivatedRouteSnapshot} future
   * @param {ActivatedRouteSnapshot} curr
   * @returns {boolean}
   * @memberof CacheResuseStrategy
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params);
  }

  /**
   * 当离开当前路由时这个方法会被调用
   * 如果返回 true 则 store 方法会被调用
   * @param {ActivatedRouteSnapshot} route
   * @returns {boolean}
   * @memberof CacheResuseStrategy
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const url = this.getFullRouteURL(route);
    console.log('shouldDetach', route);
    console.error('route.data', route.data);
    return route.data['keepAlive'];
  }

  /**
   * 将路由写入缓存
   * 在这里具体实现如何缓存 RouteHandle
   * 提供了我们离开的路由和 RouteHandle
   * @param {ActivatedRouteSnapshot} route
   * @param {DetachedRouteHandle} detachedTree
   * @memberof CacheResuseStrategy
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const url = this.getFullRouteURL(route);
    this.cacheRouters.set(url, handle);
  }

  /**
   * 路由被导航 如果此方法返回 true 则触发 retrieve 方法
   * 如果返回 false 这个组件将会被重新创建
   * @param {ActivatedRouteSnapshot} route
   * @returns {boolean}
   * @memberof CacheResuseStrategy
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const url = this.getFullRouteURL(route);
    return this.cacheRouters.has(url) && this.cacheRouters.get(url) != null;
  }

  /**
   * 从缓存读取cached route
   * 提供当前路由的参数（刚打开的路由），并且返回一个缓存的 RouteHandle
   * 可以使用这个方法手动获取任何已被缓存的 RouteHandle
   * @param {ActivatedRouteSnapshot} route
   * @returns {(DetachedRouteHandle | null)}
   * @memberof CacheResuseStrategy
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const url = this.getFullRouteURL(route);
    if (this.cacheRouters.has(url)) {
      return this.cacheRouters.get(url) || null;
    } else {
      return null;
    }
  }

  //获取完整路由路径
  private getFullRouteURL(route: ActivatedRouteSnapshot): string {
    const { pathFromRoot } = route;
    let fullRouteUrlPath: string[] = [];
    pathFromRoot.forEach((item: ActivatedRouteSnapshot) => {
      fullRouteUrlPath = fullRouteUrlPath.concat(this.getRouteUrlPath(item));
    });
    return `/${fullRouteUrlPath.join('/')}`;
  }
  private getRouteUrlPath(route: ActivatedRouteSnapshot) {
    return route.url.map((urlSegment) => urlSegment.path);
  }
}
