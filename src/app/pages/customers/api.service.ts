import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  testData() {
    this.http.get('/api/m1/1402548-0-default/user/page').subscribe((s) => {
      console.log('s', s);
    });
  }
}
