# ractive-router5

> Higher-order components and components for [Ractive](https://ractive.js.org/) when using [router5](https://github.com/router5/router5).

## How to

### Routes

Routes syntax:

```javascript
export default [
  {
    name: 'inbox',
    path: '/inbox',
    home: true,
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
  }
];
```

### RouterProvider High Order Component

Your app entry point 

```javascript
import Ractive from 'ractive';
import { createRouter, RouterProvider } from 'ractive-router5';

import routes from './routes';
import { Inbox, Compose, Contacts, NotFound} from './components';

new Ractive({
  el: '#app',
  components: {
    RouterProvider,
    Inbox, Compose, Contacts, NotFound
  },
  data() {
    return {
      router: configureRouter(routes)
    };
  },
  template: `
    <RouterProvider router="{{router}}">
      <NodeRoute routeNode="inbox"><Inbox /></NodeRoute>
      <NodeRoute routeNode="compose"><Compose /></NodeRoute>
      <NodeRoute routeNode="contacts"><Contacts /></NodeRoute>
      <NodeRoute routeNode="notfound"><NotFound /></NodeRoute>
    </RouterProvider>
  `
});
```

### NodeRoute High Order Component

Inbox example

```javascript
export default Ractive.extend({
  template: `
    <NodeRoute routeNode="inbox">
      <div class='inbox'>
          <NodeRoute routeNode="inbox"><InboxList emails={{emails}} /></NodeRoute>
          <NodeRoute routeNode="inbox.message"><Message messageId={{ route.params.id }} /></NodeRoute>
      </div>
    </NodeRoute>
  `
});
```

### BaseLink Component

```javascript
export default Ractive.extend({
  template: `
    <nav>
      <BaseLink routeName="inbox" routeOptions="{{ {reload: true} }}">Inbox</BaseLink>
      <BaseLink routeName="compose">Compose</BaseLink>
      <BaseLink routeName="contacts">Contacts</BaseLink>
    </nav>
  `
});
```


## Contributing

```sh
git clone https://github.com/fayway/ractive-router5.git
cd ractive-router5
npm install
npm test
npm run cover
```