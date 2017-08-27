import Ractive from 'ractive';

export const NodeRoute = Ractive.extend({
  name: 'NodeRoute',
  template: `
  {{#if isActive}}
    {{yield}}
  {{/if}}
  `,
  oninit() {
    if (Ractive.DEBUG) {
      console.log('NodeRoute Init', this.get('name'));
    }

    const routerProvider = this.findParent('RouterProvider');
    if (!routerProvider) {
      throw new Error('NodeRoute Component must be placed within a RouterProvider Container');
    }

    this.router  = routerProvider.get('router');

    this.listener = (toState) => {
      this.set('isActive', toState.name.indexOf(this.get('name')) === 0);
      this.set('route', toState);
    };
    this.router.addListener(this.listener);
  },
  onteardown() {
    this.router.removeListener(this.listener);
  }
});

export default NodeRoute;
