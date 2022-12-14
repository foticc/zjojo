import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, of, map } from 'rxjs';
import { User } from 'src/app/@shared/models/user';

const USERS = [
  {
    account: 'Admin',
    gender: 'male',
    userName: 'Admin',
    password: 'DevUI.admin',
    phoneNumber: '19999996666',
    email: 'admin@devui.com',
    userId: '100',
  },
  {
    account: 'User',
    gender: 'female',
    userName: 'User',
    password: 'DevUI.user',
    phoneNumber: '19900000000',
    email: 'user@devui.com',
    userId: '200',
  },
  {
    account: 'admin@devui.com',
    gender: 'male',
    userName: 'Admin',
    password: 'devuiadmin',
    phoneNumber: '19988888888',
    email: 'admin@devui.com',
    userId: '300',
  },
];

@Injectable()
export class AuthService {
  constructor(private request: HttpClient) {}

  login(account: string, password: string) {
    // for (let i = 0; i < USERS.length; i++) {
    //   if (account === USERS[i].account && password === USERS[i].password) {
    //     let { userName, gender, phoneNumber, email } = USERS[i];
    //     let userInfo: User = { userName, gender, phoneNumber, email };
    //     return of(userInfo);
    //   }
    // }
    // return throwError('Please make sure you have input correct account and password');
    return this.request
      .post('/api/login', {
        username: account,
        password,
      })
      .pipe(
        map((m) => {
          return {
            account: m['data']['info']['username'],
            gender: 'male',
            userName: m['data']['info']['username'],
            password: 'devuiadmin',
            phoneNumber: '19988888888',
            email: 'admin@devui.com',
            userId: '300',
            token: m['data']['token'],
          };
        })
      );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('userinfo');
  }

  setSession(userInfo: User) {
    localStorage.setItem('id_token', userInfo.token);
    localStorage.setItem('userinfo', JSON.stringify(userInfo));
    localStorage.setItem('expires_at', '1200');
  }

  getSession(): User {
    const userinfo_str = localStorage.getItem('userinfo');
    return JSON.parse(userinfo_str) as User;
  }

  getAuthorizationToken(): string {
    return localStorage.getItem('id_token');
  }

  isUserLoggedIn() {
    if (localStorage.getItem('userinfo')) {
      return true;
    } else {
      return false;
    }
  }
}
