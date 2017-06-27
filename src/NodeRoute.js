import Ractive from 'ractive';

export default Ractive.extend({
  template: `
    {{#if active}}
      {{yield}}
    {{/if}}
  `,
  data: {
    route: undefined,
    active: false
  },
  oninit() {
    const routerProvider = this.findParent('RouterProvider');
    if (!routerProvider) {
      throw new Error('NodeRoute Component must be placed within a RouterProvider Component');
    }
    routerProvider.observe('route', (route) => {
      this.set('route', route);
      this.set('active', route && route.name.indexOf(this.get('routeNode')) === 0);
    });
  }
});
