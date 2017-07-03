import Ractive from 'ractive';
import BaseLink from './BaseLink';
import NodeRoute from './NodeRoute';

Ractive.components.BaseLink = BaseLink;
Ractive.components.NodeRoute = NodeRoute;

export default Ractive.extend({
  data: {
    route: null
  },
  template: `
      {{>content}}
  `,
  oninit() {
    this.router = this.get('router');

    this.mapRouteStateToData = (toState) => {
      this.set('route', toState);
    };

    this.router.addListener(this.mapRouteStateToData);
  },
  oncomplete(){
    const routes = this.router.getRoutesConfig();
    const home = routes.find( route => route.home);
    if (home) {
      this.router.start(home.path);
    }
  },
  onteardown() {
    this.router.removeListener(this.mapRouteStateToData);
  }
});