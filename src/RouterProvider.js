import Ractive from 'ractive';
import NodeRoute from './NodeRoute';
import BaseLink from './BaseLink';

export const RouterProvider = Ractive.extend({
  name: 'RouterProvider',
  template: `
    {{#if ready}}
      {{>content}}
    {{/if}}
  `,
  data: {
    ready: false
  },
  oninit() {
    if (Ractive.DEBUG) {
      console.log('RouterProvider init');
    }
  },
  oncomplete() {
    console.log('RouterProvider complete');
    const { router } = this.get();


    router.start('home', () => this.set('ready', true));
  }
});

Ractive.components.RouterProvider = RouterProvider;
Ractive.components.NodeRoute = NodeRoute;
Ractive.components.BaseLink = BaseLink;


export default RouterProvider;