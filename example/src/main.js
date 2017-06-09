import Ractive from 'ractive';
import RouterProvider from '../../src/RouterProvider';

import routes from './routes';
import configureRouter from '../../src/configureRouter';

import App from './components/App';

new Ractive({
  el: '#app',
  components: {
    RouterProvider,
    App
  },
  data() {
    return {
      router: configureRouter(routes, true)
    };
  },
  template: `
    <RouterProvider router="{{router}}">
      <App></App>
    </RouterProvider>
  `,
  oninit() {
    //todo
    //this.get('router').canActivate('inbox', () => {
    //  console.log('canDeactive inbox', this);
    //  return false;
    //});
  }
});
