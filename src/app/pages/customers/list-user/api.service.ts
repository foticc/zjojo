import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CommonResult, DataDomainPage } from 'src/app/api/common-defined';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  permissionPage(page = 0, size = 10, query?) {
    return this.http
      .get('/api/user/page', {
        params: {
          page,
          size,
          ...query,
        },
      })
      .pipe(
        map((m) => {
          return (m as CommonResult).data as DataDomainPage;
        })
      );
  }

  save(data) {
    return this.http.post('/api/user/save', data);
  }

  delete(id) {
    return this.http.delete('/api/user/del', {
      params: {
        id,
      },
    });
  }

  update(data) {
    return this.http.put('/api/user/update', data);
  }

  // todo 绑定

  // todo 解绑
}
