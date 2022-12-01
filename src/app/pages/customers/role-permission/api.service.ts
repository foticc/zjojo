import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CommonResult, DataDomainPage } from 'src/app/api/common-defined';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  page(page = 0, size = 10, query?) {
    return this.http
      .get('/api/role/pagequery', {
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

  permissionPage(page = 0, size = 10, query?) {
    return this.http
      .get('/api/permission/rolepage', {
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
    return this.http.post('/api/permission/savebind', data);
  }

  delete(id) {
    return this.http.delete('/api/permission/del', {
      params: {
        id,
      },
    });
  }

  update(data) {
    return this.http.put('/api/permission/update', data);
  }
}
