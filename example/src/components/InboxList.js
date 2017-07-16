import Ractive from 'ractive';
import InboxItem from './InboxItem';

export default Ractive.extend({
  components: {
    InboxItem
  },
  template: `
    <ul class='mail-list'>
        {{#each emails as mail}}
            <InboxItem main={{mail}} />
        {{/each}}
    </ul>
  `,
  oninit() {
    console.log('InboxList oninit', this.get('emails'));
  },
  oncomplete() {
    console.log('InboxList oncomplete');
  }
});
