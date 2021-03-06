import Ractive from 'ractive';
import InboxItem from './InboxItem';

export default Ractive.extend({
  components: {
    InboxItem
  },
  template: `
    <ul class='mail-list'>
        {{#each emails as mail}}
            <InboxItem mail={{mail}} />
        {{/each}}
    </ul>
  `,
  oninit() {
    console.log('InboxList oninit');
  },
  oncomplete() {
    console.log('InboxList oncomplete');
  }
});
