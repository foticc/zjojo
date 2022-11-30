import * as Mock from 'mockjs';

export interface RoleType {
  id?: number;
  roleName: string;
  roleWeight: string;
}

export const roleImitateData = ()=> Mock.mock({
  roleName: '@first',
  roleWeight: '@csentence',
});
