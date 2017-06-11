import Ractive from 'ractive';

export default Ractive.extend({
  template: `
    {{#if active}}
      {{yield}}
    {{/if}}
  `,
  data: {
    active: false
  },
  oninit() {
    this.observe('route', (route) => {
      this.set('route', route);
      this.set('active', route && route.name.indexOf(this.get('routeNode')) === 0);
    });
  }
});
