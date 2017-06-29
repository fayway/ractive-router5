import Ractive from 'ractive';
import RouterProvider from '../../src/RouterProvider';
import App from './components/App';

import router from './router';

new Ractive({
  el: '#app',
  components: {
    RouterProvider,
    App
  },
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
