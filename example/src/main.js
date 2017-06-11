import Ractive from 'ractive';
import RouterProvider from '../../src/RouterProvider';
import App from './components/App';

import router from './router';

//router.start(()=>{
  new Ractive({
    el: '#app',
    components: {
      RouterProvider,
      App
    },
    data() {
      return {
        router
      };
    },
    template: `
      <RouterProvider router="{{router}}">
        <App></App>
      </RouterProvider>
    `,
    oncomplete() {
      //router.start()
      // +router.navigate('inbox')
    }
  });

// })

