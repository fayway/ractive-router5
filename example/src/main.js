import Ractive from 'ractive';
import RouterProvider from '../../src/RouterProvider';
import App from './components/App';

import router from './router';

Ractive.components.App = App;
Ractive.components.RouterProvider = RouterProvider;

new Ractive({
  el: '#app',
  data: {
    router
  },
  template: `
    <RouterProvider router="{{router}}">
      <App></App>
    </RouterProvider>
  `,
  oninit() {
    console.log('Main oninit')
  },
  oncomplete() {
    console.log('Main oncomplete')
  }
});
