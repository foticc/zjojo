import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CommonResult, DataDomainPage } from './common-defined';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  permissionPage(page = 1, size = 10) {
    return this.http
      .get('/api/m1/1402548-0-default/permission/page', {
        params: {
          page,
          size,
        },
      })
      .pipe(
        map((m) => {
          return (m as CommonResult).data as DataDomainPage;
        })
      );
  }
}
