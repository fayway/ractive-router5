import { constants } from 'router5';

export default [
  {
    name: 'inbox',
    path: '/inbox',
    default: true,
    children: [
      {
        name: 'message',
        path: '/message/:id'
      },
    ]
  },
  {
    name: 'compose',
    path: '/compose'
  },
  {
    name: 'notfound',
    path: '/notfound',
    default: true
  },
  {
    name: constants.UNKNOWN_ROUTE,
    path: '/not-found'
  }
];

