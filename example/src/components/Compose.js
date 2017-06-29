import Ractive from 'ractive';

export default Ractive.extend({
  data: {
    title: undefined,
    message: undefined
  },
  oninit() {
    console.log('Compose oninit');

    const router = this.get('router');
    //todo
    router.canDeactivate('compose', this.canDeactivate.bind(this));
  },
  canDeactivate() {
    if (this.get('title') || this.get('message')) {
      this.set('warning', true);
      return false;
    }
    this.set('warning', false);
    return true;
  },
  template: `
    <div class='compose'>
      <h4>Compose a new message</h4>
      <input name='title' value={{title}} />
      <textarea name='message' value={{message}} />
      {{#if warning}}<p>Clear inputs before continuing</p>{{/if}}
    </div>
  `,
  oncomplete() {
    console.log('Compose oncomplete');
  },
  onteardown() {
    console.log('Compose onteardown');
  }
});
