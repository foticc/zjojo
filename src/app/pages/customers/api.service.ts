import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface DmPermissionVo {
  desc: string;
  name: string;
  path: string;
}

export interface CommonResult {
  code: number;
  data: any[] | boolean | number | number | { [key: string]: any } | null | string;
  msg: string;
}

export interface PageResult {
  content: Array<any[] | boolean | number | number | { [key: string]: any } | null | string>;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  testData(){
    return this.http.get('/api/m1/1402548-0-default/user/page').pipe(
      map((m) => {
        return (m as CommonResult).data;
      })
    );
  }
}
