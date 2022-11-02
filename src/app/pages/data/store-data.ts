const menuData: Array<MenuItem> = [
  {
    title: 'Double',
    open: true,
    children: [
      {
        title: 'customer-list',
        link: '/pages/customers/customer-list',
      },
      {
        title: 'style-list',
        link: '/pages/customers/style-list',
      },
      {
        title: 'tree-list',
        link: '/pages/customers/tree-list',
        children: [
          {
            title: 'customer-list',
            link: '/pages/customers/customer-list',
          },
          {
            title: 'style-list',
            link: '/pages/customers/style-list',
          },
          {
            title: 'tree-list',
            link: '/pages/customers/tree-list',
            children: [
              {
                title: 'customer-list',
                link: '/pages/customers/customer-list',
              },
              {
                title: 'style-list',
                link: '/pages/customers/style-list',
              },
              {
                title: 'tree-list',
                link: '/pages/customers/tree-list',
                children: [
                  {
                    title: 'customer-list',
                    link: '/pages/customers/customer-list',
                  },
                  {
                    title: 'style-list',
                    link: '/pages/customers/style-list',
                  },
                  {
                    title: 'tree-list',
                    link: '/pages/customers/tree-list',
                    children: [
                      {
                        title: 'customer-list',
                        link: '/pages/customers/customer-list',
                      },
                      {
                        title: 'style-list',
                        link: '/pages/customers/style-list',
                      },
                      {
                        title: 'tree-list',
                        link: '/pages/customers/tree-list',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
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
