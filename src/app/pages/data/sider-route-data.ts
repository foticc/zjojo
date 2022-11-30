const menuData: Array<MenuItem> = [
  {
    title: 'Double',
    open: true,
    children: [
      {
        title: 'customer-list',
        link: '/pages/customers/customer-list',
        menuIcon: 'icon icon-add-bug',
      },
      {
        title: 'style-list',
        link: '/pages/customers/style-list',
      },
      {
        title: 'tree-list',
        link: '/pages/customers/tree-list',
      },
      {
        title: '动态表单',
        link: '/pages/customers/dynamic-form',
      },
      {
        title: '多区块',
        link: '/pages/customers/multiple-block',
      },
      {
        title: '测试',
        link: '/pages/customers/list-modal',
      },
      {
        title: 'd-column',
        link: '/pages/customers/list-modal-column',
      },
      {
        title: 'net',
        link: '/pages/customers/list-network-column',
      },
      {
        title: 'User',
        link: '/pages/customers/list-user',
      },
      {
        title: 'Role',
        link: '/pages/customers/list-role',
      },
      {
        title: 'Role-Bind',
        link: '/pages/customers/role-permission',
      },
    ],
    link: '/pages/customers',
    menuIcon: 'icon icon-add-bug', // 你可以查询 DevUI 图标库选择一个适合的图标进行替换
  },
];

export { menuData };

export interface MenuItem {
  title: string;
  link: string;
  menuIcon?: string;
  children?: Array<MenuItem>;
  open?: boolean;
}
