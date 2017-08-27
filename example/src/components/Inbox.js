import Ractive from 'ractive';
import { getEmails } from '../api';
import InboxList from './InboxList';
import Message from './Message';

export default Ractive.extend({
  template: `
    <div class='inbox'>
      <InboxList emails={{emails}} ></InboxList>
      <NodeRoute name="inbox.message"><Message /></NodeRoute>
    </div>
  `,
  components: {
    InboxList,
    Message
  },
  oninit() {
    console.log('Inbox oninit');
    this.set('emails', getEmails());
  },
  oncomplete() {
    console.log('Inbox oncomplete');
  }
});
