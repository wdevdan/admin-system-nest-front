import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-Commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'ADMINISTRATION',
    group: true,
  },
  {
    title: 'Users',
    icon: 'people-outline',
    children: [
      {
        title: 'Smart List',
        icon: 'list-outline',
        link: '/pages/routes/users/smart-user',
      },
      {
        title: 'User Form',
        icon: 'person-add-outline',
        link: '/pages/routes/users/form-user/new',
      },
    ],
  },
  {
    title: 'Items',
    icon: 'pantone-outline', //grid
    children: [
      {
        title: 'Smart List',
        icon: 'list-outline',
        link: '/pages/routes/items/smart-item',
      },
      {
        title: 'Item Form',
        icon: 'credit-card-outline',
        link: '/pages/routes/items/form-item',
      },
    ],
  },
  {
    title: 'AUTHENTICATION',
    group: true,
  },
  {
    title: 'Login Routes',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'MODELS',
    group: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
];
