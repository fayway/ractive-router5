import Ractive from 'ractive';

export default Ractive.extend({
  data: {
    title: undefined,
    message: undefined
  },
  oninit() {
    const router = this.get('router');
    //todo
    //router.canDeactivate('compose', this.canDeactivate.bind(this));
    router.canDeactivate('compose', false);
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
    <NodeRoute>
      <div class='compose'>
        <h4>Compose a new message</h4>
        <input name='title' value={{title}} />
        <textarea name='message' value={{message}} />
        {{#if warning}}<p>Clear inputs before continuing</p>{{/if}}
      </div>
    </NodeRoute>
  `
});
